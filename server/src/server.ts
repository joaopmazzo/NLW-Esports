import express from "express";
import cors from "cors";

import { PrismaClient } from "@prisma/client";
import { covertHourStringToMinutes } from "./utils/convert-hours-string-to-minutes";
import { covertMinutesToHoursString } from "./utils/convert-minutes-to-hours-string";

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient({
  log: ["query"],
});

app.get("/games", async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return response.json(games);
});

app.post("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;
  const body: any = request.body;
  // utilizar zod posteriomente para fazer validações das informações que vão vir desse body

  const ad = await prisma.ad.create({
    data: {
      ...body,
      weekDays: body.weekDays.join(","),
      hourStart: covertHourStringToMinutes(body.hourStart),
      hourEnd: covertHourStringToMinutes(body.hourEnd),
      gameId,
    },
  });

  return response.status(201).json(ad);
});

app.get("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;
  const ad = await prisma.ad.findMany({
    select: {
      name: true,
      yearsPlaying: true,
      weekDays: true,
      hourStart: true,
      hourEnd: true,
      userVoiceChannel: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return response.json(
    ad.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
        hourStart: covertMinutesToHoursString(ad.hourStart),
        hourEnd: covertMinutesToHoursString(ad.hourEnd),
      };
    })
  );
});

app.get("/ads/:id/discord", async (request, response) => {
  const adId = request.params.id;
  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return response.json(ad);
});

app.listen(3333);

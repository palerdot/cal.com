import dayjs from "dayjs";
import type { NextApiRequest, NextApiResponse } from "next";

import { getSession } from "@lib/auth";
import { sendFeedbackEmail } from "@lib/emails/email-manager";
import FeedbackEmail from "@lib/emails/templates/feedback-email";
import prisma from "@lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session?.user?.id) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const feedback = {
    userId: session.user.id,
    rating: req.body.rating,
    comment: req.body.comment,
  };

  await prisma.feedback.create({
    data: {
      ...feedback,
      date: dayjs().toISOString(),
    },
  });

  if (process.env.SEND_FEEDBACK_EMAIL || feedback.comment) sendFeedbackEmail(feedback);

  res.status(200).end();
}
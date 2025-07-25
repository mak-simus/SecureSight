import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const pathSegments = url.pathname.split("/"); 
    const id = pathSegments[pathSegments.length - 2];

    if (!id) {
      return NextResponse.json({ error: 'Incident ID missing in URL' }, { status: 400 });
    }

    const existingIncident = await prisma.incident.findUnique({
      where: { id },
    });

    if (!existingIncident) {
      return NextResponse.json({ error: 'Incident not found' }, { status: 404 });
    }

    const updatedIncident = await prisma.incident.update({
      where: { id },
      data: {
        resolved: !existingIncident.resolved,
      },
    });

    return NextResponse.json(updatedIncident);
  } catch (err) {
    return NextResponse.json({ error: 'Error updating incident' }, { status: 500 });
  }
}

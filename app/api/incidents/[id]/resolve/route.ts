import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const incidentId = params.id;

  try {
    const existingIncident = await prisma.incident.findUnique({
      where: { id: incidentId },
    });

    if (!existingIncident) {
      return NextResponse.json({ error: 'Incident not found' }, { status: 404 });
    }

    const updatedIncident = await prisma.incident.update({
      where: { id: incidentId },
      data: {
        resolved: !existingIncident.resolved,
      },
    });

    return NextResponse.json(updatedIncident);
  } catch (err) {
    return NextResponse.json({ error: 'Error updating incident' }, { status: 500 });
  }
}


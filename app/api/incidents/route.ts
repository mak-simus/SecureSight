import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const resolvedParam = searchParams.get('resolved');

  const resolved = resolvedParam === 'true';

  try {
    const incidents = await prisma.incident.findMany({
      where: {
        resolved: resolved,
      },
      orderBy: {
        tsStart: 'desc',
      },
      include: {
        camera: true,
      },
    });

    return NextResponse.json(incidents);
  } catch (err: any) {
    console.error('❌ Error fetching incidents:', err); // This will show in Netlify function logs
    return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 });
  }
}

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
  } catch (err: unknown) {
    console.error('❌ Error fetching incidents:', err); 

    
    const message = err instanceof Error ? err.message : 'Unknown error';

    return NextResponse.json({ error: message }, { status: 500 });
  }

}

import { db } from '@/lib/db/drizzle';
import { reg_users } from '@/lib/db/schema/reqUsers';
import { getErrorResponse } from '@/lib/helper';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';
export async function GET(req: NextRequest) {
    const userId = req.headers.get('X-USER-ID');
    if (!userId) {
        return getErrorResponse(
            401,
            'You are not logged in, please provide token to gain access'
        );
    }
    const user = await db
        .select()
        .from(reg_users)
        .where(eq(reg_users.user_id, Number(userId)));
    return NextResponse.json({
        status: 'success',
        data: { user: { ...user[0], password: undefined } },
    });
}
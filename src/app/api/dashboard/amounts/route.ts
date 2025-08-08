import { NextRequest} from 'next/server';
import { db } from '@/lib/db';
import { handleEncryptedRequest } from '@/app/middleware/secureApi';

function getMonthYearOffsets() {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  const lastMonthDate = new Date(currentYear, currentMonth - 2, 1);
  const lastMonth = lastMonthDate.getMonth() + 1;
  const lastMonthYear = lastMonthDate.getFullYear();

  return {
    currentMonth,
    currentYear,
    lastMonth,
    lastMonthYear,
  };
}

function buildQuery(month: number, year: number): string {
  return `
    SELECT amount FROM patient_new 
    JOIN doctor ON doctor.d_id = patient_new.doctor_name 
    JOIN hospital ON hospital.h_id = patient_new.hospital_id 
    JOIN today_transeciton ON today_transeciton.cro = patient_new.cro  
    WHERE 
      MONTH(STR_TO_DATE(today_transeciton.added_on, '%d-%m-%Y')) = '${month}' 
      AND YEAR(STR_TO_DATE(today_transeciton.added_on, '%d-%m-%Y')) = '${year}'
      AND today_transeciton.withdraw = 0
  `;
}

export async function POST(req: NextRequest) {
    return handleEncryptedRequest(req, async (_body, _req) => {
 const { currentMonth, currentYear, lastMonth, lastMonthYear } = getMonthYearOffsets();

    const [currentRows]: any = await db.query(buildQuery(currentMonth, currentYear));
    const [lastRows]: any = await db.query(buildQuery(lastMonth, lastMonthYear));

    const sumAmounts = (rows: any[]) =>
      rows.reduce((sum, row) => sum + (row.amount || 0), 0);

      return { success: true, currentMonthTotal: sumAmounts(currentRows),
      lastMonthTotal: sumAmounts(lastRows) };
    });
    
}

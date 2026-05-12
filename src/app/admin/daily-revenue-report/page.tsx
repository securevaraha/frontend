'use client';

import { useState, useEffect } from 'react';
import { Download, Calendar, TrendingUp, Search, Filter } from 'lucide-react';
import SuperAdminLayout, { Card, Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell, Button, Pagination } from '@/components/SuperAdminLayout';

interface RevenueData {
  sno?: number;
  date: string;
  cro: string;
  patientId?: string;
  patient_id?: string;
  examination_id?: string;
  patient_name: string;
  patientName?: string;
  age: string;
  gender: string;
  scanNames?: string[];
  scan_names?: string;
  scan_type?: string;
  totalScans?: number;
  total_scan: number;
  amount: number;
  category: string;
  mobile?: string;
  doctor?: string;
  doctor_name?: string;
  hospitalName?: string;
  hospital_name?: string;
}

interface TableData {
  hospitalName: string;
  category: string;
  date: string;
  scanColumns?: number;
  patients?: RevenueData[];
  summaryRows?: SummaryRow[];
  totals: {
    totalScans: number;
    totalAmount: number;
    totalPatients?: number;
  };
}

interface SummaryRow {
  scanNames: string[];
  scanCode: string;
  numberOfScans: number;
  patientCount: number;
  rate: number;
  amount: number;
}

export default function DailyRevenueReport() {
  const [revenueData, setRevenueData] = useState<TableData[]>([]);
  const [filteredData, setFilteredData] = useState<RevenueData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  
  const getTodayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };
  
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const [reportType, setReportType] = useState('D'); // D = Detail, S = Summary

  useEffect(() => {
    fetchRevenueData();
  }, [selectedDate, reportType]);

  const fetchRevenueData = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        date: selectedDate,
        type: reportType
      });
      
      const response = await fetch(`https://api.varahasdc.co.in/admin/daily-revenue-report?${params}`);
      if (response.ok) {
        const data = await response.json();
        setRevenueData(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching revenue data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const allPatients: RevenueData[] = [];
    if (Array.isArray(revenueData)) {
      revenueData.forEach((table: TableData) => {
        if (reportType === 'D' && table.patients && Array.isArray(table.patients)) {
          // Detail report - use patients data
          table.patients.forEach(patient => {
            allPatients.push({
              ...patient,
              hospitalName: table.hospitalName,
              hospital_name: table.hospitalName
            });
          });
        } else if (reportType === 'S' && table.summaryRows && Array.isArray(table.summaryRows)) {
          // Summary report - convert summaryRows to display format
          table.summaryRows.forEach((row, index) => {
            allPatients.push({
              sno: index + 1,
              date: table.date,
              cro: row.scanCode,
              patient_name: `${table.hospitalName} - ${table.category}`,
              patientName: `${table.hospitalName} - ${table.category}`,
              age: row.patientCount.toString(),
              gender: 'Summary',
              scan_names: row.scanNames.filter(name => name !== '..').join(', '),
              scanNames: row.scanNames.filter(name => name !== '..'),
              total_scan: row.numberOfScans,
              totalScans: row.numberOfScans,
              amount: row.amount,
              category: table.category,
              hospitalName: table.hospitalName,
              hospital_name: table.hospitalName,
              mobile: '',
              doctor: ''
            });
          });
        }
      });
    }
    
    let filtered = allPatients;
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        (item.patient_name || item.patientName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.cro || '').toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [revenueData, searchTerm, reportType]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRevenue = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleDownloadExcel = () => {
    if (reportType === 'S') {
      generateSummaryExcel();
    } else {
      generateDetailExcel();
    }
  };

  const generateDetailExcel = () => {
    if (!Array.isArray(revenueData) || revenueData.length === 0) {
      alert('No data available for export');
      return;
    }

    const B  = 'border:1px solid black;';
    const BH = `${B} background-color:#2F75B5; color:white;`;
    const BY = `${B} background-color:#FFEA00; color:black;`;

    let htmlContent = `<html xmlns:x="urn:schemas-microsoft-com:office:excel"><head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Detail</x:Name><x:WorksheetOptions><x:DefaultColumnWidth>12</x:DefaultColumnWidth></x:WorksheetOptions><x:Columns><x:Column x:Index="1"><x:Width>400</x:Width></x:Column></x:Columns></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><meta http-equiv="Content-Type" content="text/html; charset=Windows-1252"></head><body>`;

    revenueData.forEach(table => {
      if (!table.patients || table.patients.length === 0) return;

      const maxScans = Math.max(...table.patients.map(p => p.total_scan || p.totalScans || 0));
      const totalCols = 10 + maxScans;

      htmlContent += `<table border="1" style="border-collapse:collapse;">`;
      htmlContent += `<tr><th style="${BH} text-align:center;" colspan="${totalCols}">VARAHA SDC : IMAGING UNDER P.P.P. MODE</th></tr>`;
      htmlContent += `<tr><th style="${BH} text-align:center;" colspan="${totalCols}">RAJASTHAN MEDICARE RELIEF SOCIETY, MDM HOSPITAL</th></tr>`;
      htmlContent += `<tr><th style="${BY} text-align:center;" colspan="${totalCols}">${table.hospitalName} (${table.category}) ${selectedDate}</th></tr>`;

      // Column headers
      htmlContent += `<tr>`;
      htmlContent += `<th style="${BH} text-align:center;">S.No</th>`;
      htmlContent += `<th style="${BH}">DATE</th>`;
      htmlContent += `<th style="${BH}">CRO NO. / REG. NO.</th>`;
      htmlContent += `<th style="${BH}">PATIENT ID</th>`;
      htmlContent += `<th style="${BH}">NAME OF PATIENT</th>`;
      htmlContent += `<th style="${BH}">AGE</th>`;
      htmlContent += `<th style="${BH}">GENDER</th>`;
      for (let i = 1; i <= maxScans; i++) {
        htmlContent += `<th style="${BH}">SCAN-${i}</th>`;
      }
      htmlContent += `<th style="${BH}">TOTAL SCAN</th>`;
      htmlContent += `<th style="${BH}">AMOUNT</th>`;
      htmlContent += `<th style="${BH}">CATEGORY</th>`;
      htmlContent += `</tr>`;

      let totalScans  = 0;
      let totalAmount = 0;

      table.patients.forEach((patient, index) => {
        const patientScans = patient.scanNames || (patient.scan_names || patient.scan_type || '').split(',').map((s: string) => s.trim()).filter((s: string) => s);
        const age      = (patient.age || '').toString().replace('ear', '');
        const gender   = (patient.gender || '').substring(0, 1);
        const patientId = patient.patientId || patient.examination_id || patient.patient_id || '';
        const patientTotalScans = parseInt(String(patient.totalScans || patient.total_scan || 0));
        const patientAmount     = parseFloat(String(patient.amount || 0));

        htmlContent += `<tr>`;
        htmlContent += `<td style="${B} text-align:center;">${patient.sno || index + 1}</td>`;
        htmlContent += `<td style="${B}">${selectedDate}</td>`;
        htmlContent += `<td style="${B}">${patient.cro || ''}</td>`;
        htmlContent += `<td style="${B}">${patientId}</td>`;
        htmlContent += `<td style="${B}">${patient.patientName || patient.patient_name || ''}</td>`;
        htmlContent += `<td style="${B} text-align:center;">${age}</td>`;
        htmlContent += `<td style="${B} text-align:center;">${gender}</td>`;
        for (let i = 0; i < maxScans; i++) {
          htmlContent += `<td style="${B}">${patientScans[i] || ''}</td>`;
        }
        htmlContent += `<td style="${B} text-align:center;">${patientTotalScans}</td>`;
        htmlContent += `<td style="${B} text-align:right;">${patientAmount.toFixed(2)}</td>`;
        htmlContent += `<td style="${B}">${patient.category}</td>`;
        htmlContent += `</tr>`;

        totalScans  += patientTotalScans;
        totalAmount += patientAmount;
      });

      // Total row — yellow only on label cell, rest plain
      htmlContent += `<tr>`;
      for (let i = 0; i < 7; i++) htmlContent += `<th style="${BY}"></th>`;
      for (let i = 1; i < maxScans; i++) htmlContent += `<th style="${BY}"></th>`;
      htmlContent += `<th style="${BY}">Total</th>`;
      htmlContent += `<th style="${BY} text-align:center;">${totalScans}</th>`;
      htmlContent += `<th style="${BY} text-align:right;">${totalAmount.toFixed(2)}</th>`;
      htmlContent += `<th style="${BY}"></th>`;
      htmlContent += `</tr>`;

      htmlContent += `</table><br><br>`;
    });

    htmlContent += '</body></html>';

    const blob = new Blob([htmlContent], { type: 'application/vnd.ms-excel' });
    const url  = window.URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `DAILY REVENUE REPORT-${selectedDate}.xls`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const generateSummaryExcel = async () => {
    if (!Array.isArray(revenueData) || revenueData.length === 0) {
      alert('No data available for export');
      return;
    }

    const date1 = new Date('2023-06-01');
    const dateParts = selectedDate.split('-');
    const date2 = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const billNo = diffDays + 85;
    const billNumber = billNo === 85 ? '85 (A)' : billNo;
    const billYear = dateParts[2];

    // Fixed 8 scan columns (A-H) + Scan Code(I) + No.of Scan(J) + Patient/Forms(K) + Rate(L) + Amount(M) = 13 cols
    const FIXED_SCAN_COLS = 8;
    const totalCols = FIXED_SCAN_COLS + 5; // always 13

    let htmlContent = `<html xmlns:x="urn:schemas-microsoft-com:office:excel"><head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Summary</x:Name><x:WorksheetOptions><x:DefaultColumnWidth>12</x:DefaultColumnWidth></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><meta http-equiv="Content-Type" content="text/html; charset=Windows-1252"></head><body><table border="1" style="border-collapse:collapse;">`;
    htmlContent += `<tr><th style="border:1px solid black; text-align:center;" colspan="${totalCols}">VARAHA SDC : 256 SLICE CT SCAN</th></tr>`;
    htmlContent += `<tr><th style="border:1px solid black; text-align:center;" colspan="${totalCols}">(IMAGING UNDER P.P.P MODE)</th></tr>`;
    htmlContent += `<tr><th style="border:1px solid black; text-align:center;" colspan="${totalCols}">RAJASTHAN MEDICARE RELIEF SOCIETY, MDM HOSPITAL , Jodhpur</th></tr>`;
    htmlContent += `<tr><th style="border:1px solid black; background-color:#FFEA00; color:black; text-align:left;" colspan="${totalCols}">Bill No. :- ${billYear}/VDC_MDM/CT${billNumber}</th></tr>`;
    htmlContent += `<tr><th style="border:1px solid black; text-align:center;" colspan="${totalCols}">&nbsp;</th></tr>`;
    htmlContent += `<tr><th style="border:1px solid black; text-align:right;" colspan="${totalCols}">RMRS, MDM Hospital, Jodhpur</th></tr>`;
    htmlContent += `<tr><th style="border:1px solid black; text-align:right;" colspan="${totalCols}">SUMMARY FOR THE PERIOD OF</th></tr>`;
    htmlContent += `<tr><th style="border:1px solid black; background-color:#FFEA00; color:black; text-align:right;" colspan="${totalCols}">${selectedDate}</th></tr>`;

    let grandTotalScans  = 0;
    let grandTotalForms  = 0;
    let grandTotalAmount = 0;

    revenueData.forEach(table => {
      if (!table.summaryRows || table.summaryRows.length === 0) return;

      // Hospital header — yellow background only on col A, rest plain bordered empty cells
      htmlContent += `<tr><th style="border:1px solid black; background-color:#FFEA00; color:black; text-align:left;">(${table.hospitalName} ${table.category})</th>`;
      for (let i = 1; i < totalCols; i++) {
        htmlContent += `<td style="border:1px solid black;"></td>`;
      }
      htmlContent += `</tr>`;

      // Column headers — always 8 scan name cols then 5 fixed cols
      htmlContent += '<tr>';
      for (let i = 1; i <= FIXED_SCAN_COLS; i++) {
        htmlContent += `<th style="border:1px solid black; background-color:#2F75B5; color:white;">${i}. SCAN NAME</th>`;
      }
      htmlContent += `<th style="border:1px solid black; background-color:#2F75B5; color:white;">SCAN NO. (Scan Code)</th>`;
      htmlContent += `<th style="border:1px solid black; background-color:#2F75B5; color:white;">NO. OF SCAN</th>`;
      htmlContent += `<th style="border:1px solid black; background-color:#2F75B5; color:white;">PATIENT/ FORMS</th>`;
      htmlContent += `<th style="border:1px solid black; background-color:#2F75B5; color:white;">RATE</th>`;
      htmlContent += `<th style="border:1px solid black; background-color:#2F75B5; color:white;">AMOUNT</th>`;
      htmlContent += '</tr>';

      let totalScans   = 0;
      let totalPatients = 0;
      let totalAmount  = 0;

      table.summaryRows.forEach(row => {
        htmlContent += '<tr>';
        for (let i = 0; i < FIXED_SCAN_COLS; i++) {
          htmlContent += `<td style="border:1px solid black;">${row.scanNames[i] || '..'}</td>`;
        }
        htmlContent += `<td style="border:1px solid black; text-align:center;">${row.scanCode}</td>`;
        htmlContent += `<td style="border:1px solid black; text-align:center;">${row.numberOfScans}</td>`;
        htmlContent += `<td style="border:1px solid black; text-align:center;">${row.patientCount}</td>`;
        htmlContent += `<td style="border:1px solid black; text-align:center;">${row.rate}</td>`;
        htmlContent += `<td style="border:1px solid black; text-align:right;">${row.amount}</td>`;
        htmlContent += '</tr>';

        totalScans    += row.numberOfScans;
        totalPatients += row.patientCount;
        totalAmount   += row.amount;
      });

      // Table total row
      htmlContent += `<tr>`;
      htmlContent += `<th style="border:1px solid black; background-color:#FFEA00; color:black; text-align:left;" colspan="${FIXED_SCAN_COLS}">Total</th>`;
      htmlContent += `<th style="border:1px solid black; background-color:#FFEA00; color:black; text-align:center;"> </th>`;
      htmlContent += `<th style="border:1px solid black; background-color:#FFEA00; color:black; text-align:center;">${totalScans}</th>`;
      htmlContent += `<th style="border:1px solid black; background-color:#FFEA00; color:black; text-align:center;">${totalPatients}</th>`;
      htmlContent += `<th style="border:1px solid black; background-color:#FFEA00; color:black; text-align:center;"> </th>`;
      htmlContent += `<th style="border:1px solid black; background-color:#FFEA00; color:black; text-align:right;">${totalAmount.toFixed(2)}</th>`;
      htmlContent += `</tr>`;
      htmlContent += `<tr><td style="border:1px solid black;" colspan="${totalCols}">&nbsp;</td></tr>`;

      grandTotalScans  += totalScans;
      grandTotalForms  += totalPatients;
      grandTotalAmount += totalAmount;
    });

    const netReceivable = parseFloat((grandTotalAmount - grandTotalAmount * 0.25).toFixed(2));

    // NET AMOUNT row
    htmlContent += `<tr>`;
    htmlContent += `<th style="border:1px solid black; background-color:#FFEA00; color:black; text-align:left;" colspan="${FIXED_SCAN_COLS}">NET AMOUNT</th>`;
    htmlContent += `<th style="border:1px solid black; background-color:#FFEA00; color:black; text-align:center;"> </th>`;
    htmlContent += `<th style="border:1px solid black; background-color:#FFEA00; color:black; text-align:center;">${grandTotalScans}</th>`;
    htmlContent += `<th style="border:1px solid black; background-color:#FFEA00; color:black; text-align:center;">${grandTotalForms}</th>`;
    htmlContent += `<th style="border:1px solid black; background-color:#FFEA00; color:black; text-align:center;"> </th>`;
    htmlContent += `<th style="border:1px solid black; background-color:#FFEA00; color:black; text-align:right;">${grandTotalAmount.toFixed(2)}</th>`;
    htmlContent += `</tr>`;
    htmlContent += `<tr><td style="border:1px solid black;" colspan="${totalCols}">&nbsp;</td></tr>`;

    // Summary for the period section
    // Each row has exactly 13 individual cells (no colspan):
    // A=value  B-J=empty(9 cells)  K=SCAN value  L=empty  M=AMOUNT value
    const B   = 'border:1px solid black;';
    const BG_BLUE = `${B} background-color:#2F75B5; color:white;`;
    const BG_YEL  = `${B} background-color:#FFEA00; color:black;`;

    // helper: build a full 13-cell row with value in col A, SCAN in col K(index 10), AMOUNT in col M(index 12)
    const summaryRow = (tag: string, aStyle: string, aVal: string, kStyle: string, kVal: string, mStyle: string, mVal: string) => {
      let r = `<tr><${tag} style="${aStyle}">${aVal}</${tag}>`;
      for (let i = 1; i <= 9; i++) r += `<${tag} style="${B}"></${tag}>`; // B-J empty
      r += `<${tag} style="${kStyle} text-align:center;">${kVal}</${tag}>`; // K
      r += `<${tag} style="${B}"></${tag}>`;                                 // L empty
      r += `<${tag} style="${mStyle} text-align:center;">${mVal}</${tag}>`; // M
      r += `</tr>`;
      return r;
    };

    htmlContent += `<tr><th style="${BG_BLUE} text-align:center;" colspan="${totalCols}">SUMMARY FOR THE PERIOD</th></tr>`;

    // Header row
    htmlContent += summaryRow('th', `${B} text-align:left;`, '<B>PARTICULAR</B>', B, '<B>SCAN</B>', B, '<B>AMOUNT</B>');

    // GROSS TOTAL
    htmlContent += summaryRow('td', B, 'GROSS TOTAL', B, `${grandTotalScans}`, B, `${grandTotalAmount.toFixed(2)}`);

    // (-) 25% FREE SHARE
    htmlContent += summaryRow('td', B, '(-) 25% FREE SHARE OF MDM', B,
      `${parseFloat((grandTotalScans * 0.25).toFixed(2))}`, B, `${(grandTotalAmount * 0.25).toFixed(2)}`);

    // NET RECEIVABLE
    htmlContent += summaryRow('th', `${BG_YEL} text-align:left;`, 'NET RECEIVABLE', BG_YEL,
      `${parseFloat((grandTotalScans - grandTotalScans * 0.25).toFixed(2))}`, BG_YEL, `${netReceivable.toFixed(2)}`);

    htmlContent += `<tr><td style="${B}" colspan="${totalCols}">&nbsp;</td></tr>`;
    htmlContent += `<tr><td style="${B}" colspan="${totalCols}">&nbsp;</td></tr>`;

    // Convert amount to words
    const numberToWords = (amount: number) => {
      const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
      const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
      const convertHundreds = (num: number): string => {
        let result = '';
        if (num >= 100) { result += ones[Math.floor(num / 100)] + ' Hundred '; num %= 100; }
        if (num >= 20)  { result += tens[Math.floor(num / 10)] + ' '; num %= 10; }
        if (num > 0)    { result += ones[num] + ' '; }
        return result;
      };
      if (amount === 0) return 'Zero Rupees Only';
      const rupees = Math.floor(amount);
      const paisa  = Math.round((amount - rupees) * 100);
      let result = '';
      let tmp = rupees;
      const crores    = Math.floor(tmp / 10000000); tmp %= 10000000;
      const lakhs     = Math.floor(tmp / 100000);   tmp %= 100000;
      const thousands = Math.floor(tmp / 1000);     tmp %= 1000;
      if (crores    > 0) result += convertHundreds(crores)    + 'Crore ';
      if (lakhs     > 0) result += convertHundreds(lakhs)     + 'Lakh ';
      if (thousands > 0) result += convertHundreds(thousands) + 'Thousand ';
      if (tmp       > 0) result += convertHundreds(tmp);
      result = result.trim();
      result = result ? result + ' Rupees' : 'Zero Rupees';
      if (paisa > 0) result += ' And ' + convertHundreds(paisa).trim() + ' Paisa';
      return result + ' Only';
    };

    // Fetch paid patients
    let paidPatients = 0, paidScans = 0, paidAmount = 0;
    try {
      const paidResponse = await fetch(`https://api.varahasdc.co.in/admin/paid-patients?s_date=${selectedDate}`);
      if (paidResponse.ok) {
        const paidData = await paidResponse.json();
        if (paidData.success) {
          paidPatients = paidData.tot_patient || 0;
          paidScans    = paidData.tot_scan    || 0;
          paidAmount   = parseFloat((paidData.tot_amt || 0).toFixed(2));
        }
      }
    } catch (e) { console.error('Error fetching paid patients:', e); }

    // RUPEES IN WORDS
    htmlContent += `<tr><th style="${B} text-align:left;" colspan="${FIXED_SCAN_COLS}"><u>RUPEES ${numberToWords(netReceivable).toUpperCase()}</u></th><th style="${B}" colspan="5"></th></tr>`;
    // * Total line with For : VARAHA SDC on right
    htmlContent += `<tr><td style="${B}" colspan="${FIXED_SCAN_COLS}">* Total</td><td style="${B} text-align:right;" colspan="5">For : VARAHA SDC</td></tr>`;
    // *TOTAL PAID PATIENT line
    htmlContent += `<tr><td style="${B}" colspan="${totalCols}">*TOTAL PAID PATIENT = ${paidPatients}, TOTAL SCAN = ${paidScans}, TOTAL AMOUNT = ${paidAmount.toFixed(2)}</td></tr>`;
    htmlContent += `</table></body></html>`;

    const blob = new Blob([htmlContent], { type: 'application/vnd.ms-excel' });
    const url  = window.URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `DAILY SUMMARY REPORT-${selectedDate}.xls`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <SuperAdminLayout 
      title="Daily Revenue Report" 
      subtitle="Daily Revenue Analysis"
      actions={
        <Button onClick={handleDownloadExcel} variant="success" disabled={revenueData.length === 0}>
          <Download className="h-4 w-4 mr-2" />
          Download Excel
        </Button>
      }
    >
      <div className="space-y-4">
        <Card className="p-4">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filters & Search</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
              <input
                type="date"
                value={selectedDate.split('-').reverse().join('-')}
                onChange={(e) => {
                  const parts = e.target.value.split('-');
                  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
                  setSelectedDate(formattedDate);
                }}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="reportType"
                    value="D"
                    checked={reportType === 'D'}
                    onChange={(e) => setReportType(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">Detail</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="reportType"
                    value="S"
                    checked={reportType === 'S'}
                    onChange={(e) => setReportType(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">Summary</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search CRO or Patient..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-end">
              <Button onClick={fetchRevenueData} disabled={loading} className="w-full">
                <Search className="h-4 w-4 mr-2" />
                {loading ? 'Loading...' : 'Search'}
              </Button>
            </div>
          </div>
        </Card>

        <Card>
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Revenue Data</h2>
              <span className="text-sm text-gray-500">{filteredData.length} records</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableHeaderCell>S.No</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>{reportType === 'S' ? 'Scan Code' : 'CRO'}</TableHeaderCell>
                <TableHeaderCell>{reportType === 'S' ? 'Hospital - Category' : 'Patient Name'}</TableHeaderCell>
                <TableHeaderCell>{reportType === 'S' ? 'Patient Count' : 'Age'}</TableHeaderCell>
                <TableHeaderCell>Gender</TableHeaderCell>
                <TableHeaderCell>Mobile</TableHeaderCell>
                <TableHeaderCell>Category</TableHeaderCell>
                <TableHeaderCell>Hospital</TableHeaderCell>
                <TableHeaderCell>Doctor</TableHeaderCell>
                {(() => {
                  const maxScans = Math.max(...filteredData.map(item => {
                    if (reportType === 'S' && 'scanNames' in item && item.scanNames) {
                      return item.scanNames.length;
                    }
                    return item.total_scan || item.totalScans || 0;
                  }), 0);
                  return Array.from({length: maxScans}, (_, i) => (
                    <TableHeaderCell key={i}>Scan Type {i + 1}</TableHeaderCell>
                  ));
                })()}
                <TableHeaderCell>Total Scan</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell className="text-center" colSpan={13 + Math.max(...filteredData.map(item => {
                      if (reportType === 'S' && 'scanNames' in item && item.scanNames) {
                        return item.scanNames.length;
                      }
                      return item.total_scan || item.totalScans || 0;
                    }), 0)}>Loading...</TableCell>
                  </TableRow>
                ) : !filteredData || filteredData.length === 0 ? (
                  <TableRow>
                    <TableCell className="text-center" colSpan={13 + Math.max(...(filteredData.length > 0 ? filteredData : [{total_scan: 0}]).map(item => {
                      if (reportType === 'S' && 'scanNames' in item && item.scanNames) {
                        return item.scanNames.length;
                      }
                      return item.total_scan || 0;
                    }), 0)}>No revenue data found</TableCell>
                  </TableRow>
                ) : (
                  paginatedRevenue.map((item, index) => {
                    const scanNames = item.scanNames || (item.scan_names ? item.scan_names.split(', ') : []) || [];
                    return (
                      <TableRow key={item.cro || index}>
                        <TableCell>{startIndex + index + 1}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell className="font-medium text-red-600">{item.cro || ''}</TableCell>
                        <TableCell>{item.patient_name || item.patientName || ''}</TableCell>
                        <TableCell>{item.age || ''}</TableCell>
                        <TableCell>{item.gender || ''}</TableCell>
                        <TableCell>{item.mobile || ''}</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 font-medium">
                            {item.category || ''}
                          </span>
                        </TableCell>
                        <TableCell>{item.hospitalName || item.hospital_name || ''}</TableCell>
                        <TableCell>{item.doctor || item.doctor_name || ''}</TableCell>
                        {(() => {
                          const maxScans = Math.max(...filteredData.map(item => {
                            if (reportType === 'S' && 'scanNames' in item && item.scanNames) {
                              return item.scanNames.length;
                            }
                            return item.total_scan || item.totalScans || 0;
                          }), 0);
                          return Array.from({length: maxScans}, (_, i) => (
                            <TableCell key={i}>{scanNames[i] || ''}</TableCell>
                          ));
                        })()}
                        <TableCell className="text-center">{item.total_scan || item.totalScans || 0}</TableCell>
                        <TableCell className="font-medium text-green-600">₹{parseFloat(String(item.amount || 0)).toFixed(2)}</TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
          
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={filteredData.length}
              itemsPerPage={itemsPerPage}
            />
          )}
        </Card>
      </div>
    </SuperAdminLayout>
  );
}
import moment from 'jalali-moment';

export function convertToJalali(dateString: string): string {
  const miladiDate = moment(dateString, 'YYYY-MM-DD HH:mm:ss');

  if (!miladiDate.isValid()) {
    throw new Error('Invalid date format');
  }

  const jalaliDate = miladiDate.locale('fa').format('YYYY/MM/DD');

  return jalaliDate;
}

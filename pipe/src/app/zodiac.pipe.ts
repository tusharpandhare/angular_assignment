import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zodiac'
})
export class ZodiacPipe implements PipeTransform {

  transform(str: any): any {
   const newstr = str.split(',');
   for (const item of newstr){
     // tslint:disable-next-line: triple-equals
     if (item.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/))
     {
       const newdate = item.split('/');
       const day = newdate[0];

       const month = newdate[1];
       if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return ' Zodiac sign : Capricorn';
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return 'zodiac Signs : aquarius';
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return 'zodiac Signs : pisces';
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return 'zodiac Signs : aries';
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return 'zodiac Signs : taurus';
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return 'zodiac Signs :gemini';
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return 'zodiac Signs  : cancer';

        } else if ( (month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return 'zodiac Signs: leo';
        // tslint:disable-next-line: triple-equals
        } else if  ( (month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return 'zodiac Signs : virgo';
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return 'zodiac Signs : libra';
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return 'zodiac Signs : scorpio';
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return 'zodiac Signs : sagittarius';
     }
    }
   }
  }

  }



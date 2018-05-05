import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phone' })
export class PhonePipe implements PipeTransform {
    transform(telephone: number) {
        if (!telephone) {
            return;
        }
        const phone = telephone.toString();
        let formatted = '';
        for (let i = 0; i < phone.length; i++) {
            switch (i) {
                case 0:
                    formatted += '(';
                    break;
                case 3:
                    formatted += ') ';
                    break;
                case 6:
                    formatted += '-';
                    break;
                default:
                    break;
            }
            formatted += phone[i];
        }
        return formatted;
    }
}

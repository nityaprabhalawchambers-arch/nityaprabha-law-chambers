import { PartnerBio } from '../types';

export function downloadVCard(partner: PartnerBio) {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${partner.name.replace('Advocate ', '')};;;;`,
    `FN:${partner.name}`,
    `ORG:Nityaprabha Law Chambers;`,
    `TITLE:${partner.title} - ${partner.roleBadge}`,
    `TEL;TYPE=WORK,VOICE:${partner.phone}`,
    `EMAIL;TYPE=PREF,INTERNET:${partner.email}`,
    'ADR;TYPE=WORK:;;Supreme Court & Delhi High Court Chambers;New Delhi;Delhi;110001;India',
    `NOTE:Admissions: ${partner.admissions}. Specialization: ${partner.specialization}. Education: ${partner.education}`,
    'URL:https://nityaprabhalawchambers.com',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${partner.id}-contact.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

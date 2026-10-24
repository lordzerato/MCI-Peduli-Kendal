export function asset(path) {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${String(path).replace(/^\//, '')}`
}

export const WHATSAPP =
  'https://api.whatsapp.com/send?phone=+6287710555510&text=Assalamualaikum+Wr.+Wb.'

export function openWhatsapp(text) {
  const url = `https://api.whatsapp.com/send?phone=+6287710555510&text=${encodeURIComponent(text)}`
  window.open(url, '_blank', 'noopener')
}

export function waMe(phone) {
  const digits = String(phone).replace(/\D/g, '')
  const intl = digits.startsWith('0') ? `62${digits.slice(1)}` : digits
  return `https://wa.me/${intl}`
}

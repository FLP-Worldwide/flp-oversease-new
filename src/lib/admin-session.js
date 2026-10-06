import { createHmac, timingSafeEqual } from 'node:crypto';

const secret = () => process.env.ADMIN_SESSION_SECRET || process.env.MONGODB_URI;

function signature(value) {
  return createHmac('sha256', secret()).update(value).digest('hex');
}

export function createAdminSession(adminId) {
  const payload = `${adminId}.${Date.now() + 8 * 60 * 60 * 1000}`;
  return `${payload}.${signature(payload)}`;
}

export function hasAdminSession(request) {
  const session = request.cookies.get('admin_session')?.value;
  if (!session) return false;
  const parts = session.split('.');
  if (parts.length !== 3 || !/^\d+$/.test(parts[1]) || !/^[0-9a-f]{64}$/.test(parts[2])) return false;
  const payload = `${parts[0]}.${parts[1]}`;
  const expected = Buffer.from(signature(payload), 'hex');
  const actual = Buffer.from(parts[2], 'hex');
  return actual.length === expected.length &&
    Number(parts[1]) > Date.now() && timingSafeEqual(actual, expected);
}

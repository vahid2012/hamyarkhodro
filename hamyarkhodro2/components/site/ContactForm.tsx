'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Send, Check } from 'lucide-react';
import { SITE } from '@/data/site';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-4 text-lg font-bold text-green-800">پیام شما ثبت شد</h3>
        <p className="mt-2 text-sm text-green-700">
          در اسرع وقت با شما تماس می‌گیریم. برای درخواست فوری با {SITE.phone} تماس بگیرید.
        </p>
        <a href={`tel:${SITE.phone}`} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3 font-bold text-white">
          <Phone className="h-5 w-5" />
          تماس فوری
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">نام و نام خانوادگی</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-red focus:outline-none"
          placeholder="نام خود را وارد کنید"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">شماره تماس</label>
        <input
          required
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-red focus:outline-none"
          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">نوع خدمت</label>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-red focus:outline-none"
        >
          <option value="">انتخاب کنید</option>
          <option>امداد خودرو</option>
          <option>یدک کش</option>
          <option>جرثقیل</option>
          <option>خودروبر</option>
          <option>باتری به باتری</option>
          <option>پنچرگیری</option>
          <option>حمل خودرو صفر</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">توضیحات و آدرس</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-red focus:outline-none"
          placeholder="آدرس دقیق و توضیح خرابی را وارد کنید"
        />
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-3.5 font-bold text-white shadow-lg shadow-red-500/30 transition-all hover:bg-brand-red-dark active:scale-[0.98]"
      >
        <Send className="h-5 w-5" />
        ارسال درخواست
      </button>
    </form>
  );
}

'use client'

import { useState } from 'react'
import { BarChart3, ChevronDown, FileText, LayoutDashboard, Package, Settings2, Sparkles, TrendingUp, Users, X } from 'lucide-react'

const months = [
  { name: 'Apr', orders: 184, revenue: 18400 }, { name: 'May', orders: 218, revenue: 22100 },
  { name: 'Jun', orders: 246, revenue: 24800 }, { name: 'Jul', orders: 279, revenue: 28200 },
  { name: 'Aug', orders: 312, revenue: 31900 }, { name: 'Sep', orders: 347, revenue: 36400 },
  { name: 'Oct', orders: 391, revenue: 41200 }, { name: 'Nov', orders: 428, revenue: 45800 },
  { name: 'Dec', orders: 465, revenue: 50900 }, { name: 'Jan', orders: 511, revenue: 56400 },
  { name: 'Feb', orders: 548, revenue: 61200 }, { name: 'Mar', orders: 602, revenue: 68700 },
]

const orders = [
  ['CK-10482', 'Mar 28, 2025', 'Acme Studio', '$2,480', 'Paid'],
  ['CK-10481', 'Mar 27, 2025', 'Northstar Labs', '$1,920', 'Paid'],
  ['CK-10480', 'Mar 26, 2025', 'Fieldwork Co.', '$840', 'Pending'],
  ['CK-10479', 'Mar 25, 2025', 'Morrow Goods', '$3,210', 'Paid'],
]

export default function Dashboard() {
  const [notice, setNotice] = useState(false)
  const [report, setReport] = useState(false)
  const max = Math.max(...months.map((month) => month.revenue))
  const generate = () => { setReport(true); setNotice(true); window.setTimeout(() => setNotice(false), 3500) }

  return <div className="dashboard">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">C</div><span>clear design</span></div>
      <nav className="nav" aria-label="Primary navigation">
        <div className="nav-label">Workspace</div>
        <button className="nav-item active"><LayoutDashboard /><span>Overview</span></button>
        <button className="nav-item"><BarChart3 /><span>Analytics</span></button>
        <button className="nav-item"><Package /><span>Orders</span></button>
        <button className="nav-item"><Users /><span>Customers</span></button>
        <div className="nav-label" style={{ marginTop: 19 }}>Manage</div>
        <button className="nav-item"><FileText /><span>Reports</span></button>
        <button className="nav-item"><Settings2 /><span>Settings</span></button>
      </nav>
      <div className="sidebar-footer">Clear Design<br /><span className="mono">workspace / 2025</span></div>
    </aside>
    <main className="main">
      <header className="topbar"><div><p className="eyebrow">Monday, March 31, 2025</p><h1 className="title">Good morning, Taylor.</h1></div><div className="top-actions"><button className="period">Last 12 months <ChevronDown /></button><button className="generate" onClick={generate}><Sparkles /> Generate report</button></div></header>
      <section className="hero"><div><p className="eyebrow" style={{ color: '#aabbb0' }}>Annual performance</p><h2>Your commerce engine is accelerating.</h2><p>Revenue and order volume have grown steadily across the last 12 months.</p></div><div className="hero-stat"><div className="big">+31.4%</div><span>year over year revenue</span></div></section>
      <section className="stats" aria-label="Key metrics">
        <Metric label="Total revenue" value="$68,700" foot="+12.2% vs last month" />
        <Metric label="Total orders" value="602" foot="+9.9% vs last month" />
        <Metric label="Average order value" value="$114.12" foot="+$4.20 vs last month" />
        <Metric label="Conversion rate" value="4.82%" foot="+0.6% vs last month" />
      </section>
      <div className="content-grid"><section className="card"><div className="card-header"><div><h2 className="card-title">Revenue overview</h2><p className="card-subtitle">Monthly revenue from all orders</p></div><span className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>$507.6k total</span></div><div className="chart-wrap"><div className="chart-grid"><span /><span /><span /><span /></div>{months.map((month, index) => <div className="bar-group" key={month.name}><div className="bar" style={{ height: `${month.revenue / max * 86}%` }} /><div className="bar active" style={{ height: `${month.orders / 602 * 58}%` }} /><span className="month">{month.name}</span></div>)}</div><div className="legend"><span><i className="dot" />Revenue</span><span><i className="dot gray" />Order volume</span></div></section><section className="card"><div className="card-header"><div><h2 className="card-title">Monthly report</h2><p className="card-subtitle">Latest generated snapshots</p></div></div>{report ? <div className="report-list"><ReportRow month="March 2025" amount="$68,700" change="+12.2%" /><ReportRow month="February 2025" amount="$61,200" change="+8.5%" /><ReportRow month="January 2025" amount="$56,400" change="+10.2%" /><ReportRow month="December 2024" amount="$50,900" change="+6.1%" /></div> : <div style={{ color: 'var(--muted)', fontSize: 12, lineHeight: 1.6, padding: '12px 0 18px' }}>Generate your first report to turn this year&apos;s order data into a monthly performance snapshot.</div>}<button className="generate" style={{ width: '100%', justifyContent: 'center', marginTop: 20 }} onClick={generate}><Sparkles /> Generate now</button></section></div>
      <section className="card table-card"><div className="card-header"><div><h2 className="card-title">Recent orders</h2><p className="card-subtitle">The latest activity across your workspace</p></div><button className="period">View all <TrendingUp /></button></div><table className="table"><thead><tr><th>Order</th><th>Date</th><th>Customer</th><th>Total</th><th>Status</th></tr></thead><tbody>{orders.map(([id, date, customer, total, status]) => <tr key={id}><td className="order-id">{id}</td><td>{date}</td><td>{customer}</td><td>{total}</td><td><span className={`status ${status === 'Pending' ? 'pending' : ''}`}>{status}</span></td></tr>)}</tbody></table></section>
    </main>{notice && <div className="toast" role="status">Monthly report generated successfully <button onClick={() => setNotice(false)} aria-label="Dismiss"><X /></button></div>}
  </div>
}

function Metric({ label, value, foot }: { label: string, value: string, foot: string }) { return <article className="card"><div className="stat-label"><span>{label}</span><TrendingUp /></div><div className="stat-value">{value}</div><div className="stat-foot"><span className="up">↗</span> {foot}</div></article> }
function ReportRow({ month, amount, change }: { month: string, amount: string, change: string }) { return <div className="report-row"><div><strong>{month}</strong><span>All channels</span></div><div className="amount">{amount}<div className="change">↗ {change}</div></div></div> }

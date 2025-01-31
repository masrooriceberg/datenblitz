import React from 'react';
import { 
  Zap, 
  Users, 
  Shield, 
  BarChart3, 
  CheckCircle2,
  ArrowRight,
  Brain,
  Target,
  Building2,
  LineChart,
  Database,
  RefreshCw,
  BarChart4,
  ArrowRightLeft,
  Star,
  Clock,
  BadgeCheck,
  TrendingUp
} from 'lucide-react';

import dashboardImage from "../assets/datenleads.png"

export function LandingSection() {
  return (
    <div className="bg-white">
      {/* Value Proposition Section */}
      
      
      <div class="bg-white">
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" class="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 class="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">Die intelligente Art Leads zu generieren.</h2>
        <p class="mt-6 text-lg/8 text-pretty text-gray-300"> Nutze unsere KI-gestützte Plattform, um qualifizierte Geschäftskontakte zu finden und deinen Vertrieb zu optimieren.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
          <a href="#" class="text-sm/6 font-semibold text-white">Mehr <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="relative mt-16 h-80 lg:mt-8">
        <img class="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src={dashboardImage} alt="App screenshot" width="1824" height="1080">
     </img>
      </div>

     
    </div>
  </div>
</div>




      <section className="py-20">
        
        <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <svg class="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg>
  </div>
  <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
        <div class="lg:max-w-lg">
          <p class="text-base/7 font-semibold text-indigo-600">Warum wir?</p>
          <h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Rechtskonform und effizient</h1>
          <p class="mt-6 text-xl/8 text-gray-700">Schnelligkeit trifft auf Sicherheit: Unsere Lösungen sind 100 % DSGVO-konform, rechtskonform und speziell für Unternehmen entwickelt, die auf maximale Effizienz setzen. Mit direktem Ansprechpartner und klaren Prozessen sorgen wir dafür, dass Projekte reibungslos starten und umgesetzt werden können.</p>
        </div>
      </div>
    </div>
    <div class="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
      <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]" src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png" alt=""></img>
    </div>
    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
        <div class="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
          <p>Fokus auf Sicherheit und Compliance. Datenschutz und Rechtskonformität stehen bei uns im Mittelpunkt. Von der sicheren Datenübertragung bis hin zur automatisierten Protokollierung – wir kümmern uns um alles:</p>
          <ul role="list" class="mt-8 space-y-8 text-gray-600">
            <li class="flex gap-x-3">
              <svg class="mt-1 size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
              </svg>
              <span><strong class="font-semibold text-gray-900">SSL-Zertifikate:</strong> Schutz Ihrer Daten bei jeder Übertragung – automatisch und sicher.</span>
            </li>
            <li class="flex gap-x-3">
              <svg class="mt-1 size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd" />
              </svg>
              <span><strong class="font-semibold text-gray-900">Datenbank-Backups:</strong> Lückenlose Sicherung, um Ausfälle zu vermeiden.</span>
            </li>
            <li class="flex gap-x-3">
              <svg class="mt-1 size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                <path fill-rule="evenodd" d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" clip-rule="evenodd" />
              </svg>
              <span><strong class="font-semibold text-gray-900">Rechtskonformität</strong> Alle Prozesse erfüllen die höchsten Standards und Anforderungen.</span>
            </li>
          </ul>
          <p class="mt-8">Keine Kompromisse bei Geschwindigkeit und Service.
Unsere Workflows verbinden Schnelligkeit mit absoluter Sicherheit. Ohne eigene Serverlösungen profitieren Sie von effizienten Prozessen, direktem Kontakt und schneller Abwicklung. Von der Planung bis zur Umsetzung: Wir machen es einfach und sorgenfrei für Sie!</p>
        </div>
      </div>
    </div>
  </div>
</div>

      </section>

   
       

      <div class="bg-white">
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-center text-base/7 font-semibold text-indigo-600">Quality</h2>
    <p class="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">Unser Anspruch: Datensicherheit & Performance</p>

    <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
      <div class="relative lg:row-span-2">
        <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
          <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Qualität</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Unsere Kontakte werden mehrfach verifiziert und aktualisiert, um höchste Datenqualität zu gewährleisten.</p>
          </div>
          <div class="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
            <div class="absolute inset-x-10 top-10 bottom-0 overflow-hidden border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
              <img class="size-full object-cover object-top" src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png" alt=""></img>
            </div>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
      </div>
      <div class="relative max-lg:row-start-1">
        <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
          <div class="px-8 pt-8 sm:px-10 sm:pt-10">
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Wir analysieren Millionen von Datenpunkten, um die relevantesten B2B-Kontakte für deine Zielgruppe zu identifizieren.</p>
          </div>
          <div class="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
            <img class="w-full max-lg:max-w-xs" src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png" alt=""></img>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
      </div>
      <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
        <div class="absolute inset-px rounded-lg bg-white"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
          <div class="px-8 pt-8 sm:px-10 sm:pt-10">
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Alle Daten werden nach strengsten Datenschutzrichtlinien erhoben und verarbeitet.</p>
          </div>
          <div class="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
            <img class="h-[min(152px,40cqw)] object-cover" src="https://tailwindui.com/plus/img/component-images/bento-03-security.png" alt=""></img>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
      </div>
      <div class="relative lg:row-span-2">
        <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
          <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">CRM Integration</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Nahtlose Integration in dein bestehendes CRM-System für optimierte Vertriebsprozesse.</p>
          </div>
          <div class="relative min-h-[30rem] w-full grow">
            <div class="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
              <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                <div class="-mb-px flex text-sm/6 font-medium text-gray-400">
                  <div class="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">Leadlist.csv</div>
                  <div class="border-r border-gray-600/10 px-4 py-2">Firmenadressen.csv</div>
                </div>
              </div>
              <div class="px-6 pt-6 pb-14 text-white">
              <table>
    <thead>
      <tr>
        <th>Branche</th>
        <th>Position</th>
        <th>Region</th>
        <th>Anzahl Leads</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>IT</td>
        <td>CEOs</td>
        <td>Deutschland</td>
        <td>2,500</td>
      </tr>
      <tr>
        <td>Marketing</td>
        <td>CMOs</td>
        <td>Österreich</td>
        <td>1,200</td>
      </tr>
      <tr>
        <td>Finanzen</td>
        <td>CFOs</td>
        <td>Schweiz</td>
        <td>900</td>
      </tr>
      <tr>
        <td>Start-ups</td>
        <td>Gründer</td>
        <td>Deutschland</td>
        <td>1,800</td>
      </tr>
      <tr>
        <td>Logistik</td>
        <td>Manager</td>
        <td>Europa</td>
        <td>3,000</td>
      </tr>
    </tbody>
  </table>
              </div>
            </div>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
      </div>
    </div>
  </div>
</div>





      <div class="bg-white py-24">
        <h2 class="text-center text-base/7 font-semibold text-indigo-600">Target</h2>
    <p class="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl"><i>Genau</i> das, was du suchst.</p>
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    

    <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
      
      <div class="relative lg:row-span-2">
        <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
          <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
            <Brain className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">KI-gestützte Lead-Listen für präzise Zielgruppen</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center"> Unsere KI-Technologie erstellt präzise Lead-Listen, die über standardisierte Daten hinausgehen. Wir bieten dir branchenspezifische und datengetriebene Lösungen für deinen Erfolg.</p>
          </div>
          
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
      </div>
      <div class="relative max-lg:row-start-1">
        <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
          <div class="px-8 pt-8 sm:px-10 sm:pt-10">
            <Target className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Use-Case-spezifische Leads</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Unsere Plattform liefert genau die Daten, die zu deinem individuellen Anwendungsfall passen.</p>
          </div>
           
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
      </div>
      <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
        <div class="absolute inset-px rounded-lg bg-white"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
          <div class="px-8 pt-8 sm:px-10 sm:pt-10">
            <Building2 className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Fokus auf Branchenspezialität</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Wir stellen sicher, dass unsere Leads exakt auf deine Bedürfnisse zugeschnitten sind.</p>
          </div>
          
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
      </div>
      <div class="relative lg:row-span-2">
        <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
          <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
            <LineChart className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Mehr Effizienz dank gezielter Daten</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Kein mühsames Durchsuchen riesiger Datenbanken mehr. Unsere Lösung filtert und liefert die wertvollsten Leads für deine Zielgruppe – schnell und zuverlässig.</p>
          </div>
          
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
      </div>
    </div>
  </div>
</div>





 



      

      
<div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
 
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <div class="max-w-xl lg:max-w-lg">
        <h2 class="text-4xl font-semibold tracking-tight text-white">Weitere Leistungen für Ihren Erfolg.</h2>
        <p class="mt-4 text-lg text-gray-300">Steigern Sie den Wert Ihrer Leads und maximieren Sie den Erfolg Ihrer Kampagnen mit unseren professionellen Zusatzservices. Wir bieten Ihnen maßgeschneiderte Lösungen, um Ihre Daten in Bestform zu bringen und den optimalen Nutzen aus Ihren Leadlisten zu ziehen.</p>
        <div class="mt-6 flex max-w-md gap-x-4">
          
           
          <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Kontakt</button>
        </div>
      </div>
      <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
        <div class="flex flex-col items-start">
          <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
          </div>
          <dt class="mt-4 text-base font-semibold text-white">Datenbereinigung</dt>
          <dd class="mt-2 text-base/7 text-gray-400">Wir unterstützen Sie bei der Bereinigung Ihrer internen CRM-Daten nach Ihren individuellen Anforderungen.</dd>
        </div>
        <div class="flex flex-col items-start">
          <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
            </svg>
          </div>
          <dt class="mt-4 text-base font-semibold text-white">CRM Integration</dt>
          <dd class="mt-2 text-base/7 text-gray-400">Nahtlose Integration Ihrer Lead-Daten in alle gängigen CRM-Systeme für optimierte Vertriebsprozesse.</dd>
        </div>
        <div class="flex flex-col items-start">
          <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
            </svg>
          </div>
          <dt class="mt-4 text-base font-semibold text-white">Datenanalyse</dt>
          <dd class="mt-2 text-base/7 text-gray-400">Tiefgehende Analysen Ihrer Lead-Daten für bessere Entscheidungen und höhere Conversion-Raten.</dd>
        </div>
        <div class="flex flex-col items-start">
          <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
            </svg>
          </div>
          <dt class="mt-4 text-base font-semibold text-white">Weitere Services</dt>
          <dd class="mt-2 text-base/7 text-gray-400">Individuelle Lösungen wie Analyse deiner Datenqualität oder spezifische Anfragen hinsichtlich Sammlung von Daten.</dd>
        </div>
      </dl>
      
    </div>
  </div>
  <div class="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
    <div class="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
  </div>
</div>

      

 


       
<div class="relative isolate overflow-hidden bg-black py-24 sm:py-32">
   
  <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div class="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20" ></div>
  </div>
  <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div class="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20" ></div>
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Die Arbeit mit uns.</h2>
      <p class="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p>
    </div>
    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="#">Schnelle Antwort <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Unverbindliche Gespräche <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Beratung <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Qualität <span aria-hidden="true">&rarr;</span></a>
      </div>
      <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-gray-300">Datensätze</dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">50.000+</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-gray-300">Branchen</dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">300+</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-gray-300">Aktualität</dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">2025</dd>
        </div>
        
      </dl>
    </div>
  </div>
</div>

      
    </div>

   
    
  );
}
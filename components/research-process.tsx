"use client"

import { useEffect, useRef, useState } from "react"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const STEPS = [
  { id: "step-1", title: "半結構訪談" },
  { id: "step-2", title: "Persona 建立" },
  { id: "step-3", title: "使用者旅程地圖" },
]

const STEP1_MEDIA = [
  {
    id: "ld1",
    src: "/images/LD1.png",
    title: "半結構訪談紀錄 LD1",
    caption: "訪談中整理的情境記錄與使用者語錄片段。",
  },
  {
    id: "ld2",
    src: "/images/LD2.png",
    title: "半結構訪談紀錄 LD2",
    caption: "延伸歸納出的痛點整理與靈感截圖。",
  },
]

export function ResearchProcessSection() {
  const [activeStep, setActiveStep] = useState<string>(STEPS[0]?.id ?? "")
  const [step1MediaIndex, setStep1MediaIndex] = useState(0)
  const stepRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    )

    STEPS.forEach((step) => {
      const element = stepRefs.current[step.id]
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const activeMedia = STEP1_MEDIA[step1MediaIndex]
  const handleMediaChange = (direction: "prev" | "next") => {
    setStep1MediaIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % STEP1_MEDIA.length
      }
      return (prev - 1 + STEP1_MEDIA.length) % STEP1_MEDIA.length
    })
  }

  return (
    <div className="grid gap-10 md:grid-cols-[260px_1fr] items-start">
      <div className="space-y-6 md:sticky md:top-0 md:self-start">
        <h3 className="text-3xl font-extrabold text-gray-800">🧐 Research Process</h3>
        <div className="space-y-3">
          {STEPS.map((step) => (
            <a
              key={step.id}
              href={`#${step.id}`}
              onClick={() => setActiveStep(step.id)}
              className={cn(
                "relative block rounded-2xl px-5 py-4 border transition-all focus-visible:outline-none focus-visible:ring-0 focus-visible:bg-[#F3F1EC]",
                activeStep === step.id
                  ? "bg-[#FFF4EC] border-[#F68E41]/60"
                  : "border-transparent hover:border-transparent hover:bg-[#F3F1EC]",
              )}
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#F68E41] uppercase">{`Step ${step.id.slice(-1)}`}</p>
              <p
                className={cn(
                  "text-lg mt-1 transition-colors",
                  activeStep === step.id ? "text-[#F68E41]" : "text-gray-800",
                )}
              >
                {step.title}
              </p>
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-8 mt-12 md:mt-0">
          <div
            id="step-1"
            ref={(el) => {
              stepRefs.current["step-1"] = el
            }}
            className="scroll-mt-32"
          >
            <Card className="p-6 bg-white rounded-2xl shadow border-0">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#F68E41] uppercase">Step 1</p>
                  <h4 className="text-xl font-semibold text-gray-800">半結構訪談</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  設計訪綱問題，使用 Affinity Diagram 和同理心地圖分析訪談結果，提供後續研究的方向。
                </p>
              </div>
              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="text-lg">👥</span>
                  <div>
                    <p className="text-gray-800 font-medium">訪談對象</p>
                    <p>8 位有遠距戀愛經驗的使用者（年齡 19-29 歲）</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">⏱️</span>
                  <div>
                        <p className="text-gray-800 font-medium">訪談時長</p>
                        <p>每人 45-60 分鐘</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">📝</span>
                  <div>
                    <p className="text-gray-800 font-medium">訪談主題</p>
                    <ul className="mt-2 list-disc list-outside ml-4 space-y-1">
                      <li>日常溝通的具體行為與頻率</li>
                      <li>溝通時的即時感受與想法</li>
                      <li>現有產品的使用經驗與痛點</li>
                      <li>理想的溝通方式與互動儀式</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div
                  className="relative overflow-hidden rounded-2xl border border-[#F0E4DB] bg-white flex items-center justify-center"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <Image
                    src={activeMedia.src}
                    alt={activeMedia.title}
                    width={900}
                    height={520}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>
                <div className="flex items-center justify-end mt-3">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleMediaChange("prev")}
                      className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 text-gray-600 hover:bg-gray-50"
                      aria-label="上一張研究圖"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMediaChange("next")}
                      className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 text-gray-600 hover:bg-gray-50"
                      aria-label="下一張研究圖"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div
            id="step-2"
            ref={(el) => {
              stepRefs.current["step-2"] = el
            }}
            className="scroll-mt-32"
          >
            <Card className="p-6 bg-white rounded-2xl shadow border-0">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#F68E41] uppercase">Step 2</p>
                  <h4 className="text-xl font-semibold text-gray-800">Persona 建立</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  基於訪談分析，我們識別出兩類典型使用者。
                </p>
              </div>
                <div className="mt-4 grid gap-4 text-sm text-gray-600">
                  <div className="rounded-2xl bg-[#FFF6EE] border border-[#F68E41]/20 p-4">
                    <p className="text-gray-800 font-semibold mb-2">Persona A</p>
                    <ul className="space-y-1">
                      <li>
                        <span className="font-medium text-gray-800">特徵：</span>
                        時時刻刻與另一半分享大小事，維持聯繫，生活步調相對悠閒。
                      </li>
                      <li>
                        <span className="font-medium text-gray-800">目標：</span>
                        想把握時間談甜甜的戀愛，即使遠距離也要享受當下的幸福。
                      </li>
                      <li>
                        <span className="font-medium text-gray-800">困難：</span>
                        兩人無法常見面，希望能藉由電子產品維持情感。
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-white border border-[#F68E41]/20 p-4">
                    <p className="text-gray-800 font-semibold mb-2">Persona B</p>
                    <ul className="space-y-1">
                      <li>
                        <span className="font-medium text-gray-800">特徵：</span>
                        生活忙碌，與另一半每天聯絡的次數不多。
                      </li>
                      <li>
                        <span className="font-medium text-gray-800">目標：</span>
                        只要能維持兩人的感情狀態就好，盡量不增加負擔。
                      </li>
                      <li>
                        <span className="font-medium text-gray-800">困難：</span>
                        因生活忙碌無法時常照應彼此，且大多數情侶 App 需要投入太多心力。
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  現行產品多以 Persona A 為主要對象，對 Persona B 而言功能過多、資訊複雜反而降低使用意願。訪談顯示他們仍需要日常維繫感情來維持安全感，因此後續決定以 Persona B 為核心，針對其繁忙生活型態設計低侵入的解決方案。
                </p>
              </Card>
          </div>
          <div
            id="step-3"
            ref={(el) => {
              stepRefs.current["step-3"] = el
            }}
            className="scroll-mt-32"
          >
            <Card className="p-6 bg-white rounded-2xl shadow border-0">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#F68E41] uppercase">Step 3</p>
                  <h4 className="text-xl font-semibold text-gray-800">使用者旅程地圖</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  將訪談洞察放到情境旅程中，拆解安全感波動的觸發點，釐清需要支援的階段。
                </p>
              </div>
              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="text-lg">🎯</span>
                  <div>
                    <p className="text-gray-800 font-medium">研究問題</p>
                    <p>遠距情侶在什麼情境下安全感會下降？什麼情境會提升？</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">📊</span>
                  <div>
                    <p className="text-gray-800 font-medium">分析維度</p>
                    <p>情緒狀態、觸發事件、行為反應與痛點時刻，對照時間軸檢視模式。</p>
                    <div className="mt-3 rounded-2xl overflow-hidden w-full">
                      <Image
                        src="/images/LD3.png"
                        alt="使用者旅程地圖視覺化：LD3"
                        width={1200}
                        height={700}
                        className="w-full h-auto object-cover"
                        style={{
                          marginTop: "-35px",
                          marginBottom: "-35px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          display: "block",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-[#FFF6EE] border border-[#F68E41]/20 p-5">
                  <p className="text-gray-800 font-semibold mb-2">關鍵洞察</p>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-gray-700">
                    <li>對方存在感太低 → 安全感下降。痛點時刻：忙碌時期（工作／考試週），兩人互動頻率驟降。</li>
                    <li>溝通前期情緒最不穩定。痛點時刻：發現對方已讀不回、語氣冷淡的瞬間。</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
  )
}

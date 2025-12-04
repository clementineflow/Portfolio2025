import { Button } from "@/components/ui/button"
import { Linkedin, Download } from "lucide-react"
import { getTranslations } from "next-intl/server"

export async function Footer() {
  const t = await getTranslations("Footer")

  return (
    <footer className="py-16 px-6 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h3 className="font-montserrat font-bold text-2xl">{t("title")}</h3>
          <p className="text-background/80 text-lg">{t("description")}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" />
              {t("resumeCta")}
            </a>
          </Button>

          <Button
            variant="outline"
            className="border-background/20 text-background hover:bg-background/10 bg-transparent"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              {t("linkedinCta")}
            </a>
          </Button>
        </div>

        <div className="pt-8 border-t border-background/20">
          <p className="text-background/60 text-sm">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}

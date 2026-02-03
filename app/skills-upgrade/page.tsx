import SkillsUpgradeHero from "@/app/components/skillsUpgrade/SkillsUpgradeHero";
import SkillsUpgradeInfo from "@/app/components/skillsUpgrade/SkillsUpgradeInfo";
import SkillsUpgradePrograms from "@/app/components/skillsUpgrade/SkillsUpgradePrograms";
import CertificationBenefits from "@/app/components/skillsUpgrade/CertificationBenefits";
import SkillsUpgradeCTA from "@/app/components/skillsUpgrade/SkillsUpgradeCTA";

export default async function SkillsUpgradePage() {
  return (
    <>
      <SkillsUpgradeHero />
      <SkillsUpgradeInfo />
      <SkillsUpgradePrograms />
      <CertificationBenefits />
      <SkillsUpgradeCTA />
    </>
  );
}

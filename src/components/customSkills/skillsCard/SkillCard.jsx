import style from './skillsCard.module.css'

const SkillsCard = ({ icon, title }) => {
  return (
    <div
      className={`${style.card} cursor-pointer overflow-hidden w-w70p h-h70p flex justify-center items-center relative p-2 rounded-xl hover:p-3 hover:rounded-50 hover:border-primary bg-hblack transition-all duration-300 border-2 border-transparent`}
    >
      <span className={style.iconBackground}>{icon}</span>
    </div>
  )
}
export default SkillsCard

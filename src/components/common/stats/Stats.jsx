import { useEffect, useState } from 'react'
import CountUp from 'react-countup'

const stats = [
  {
    num: 3.0,
    suffixNum: '+',
    text: 'Years of experience'
  },
  {
    num: 9,
    text: 'Technologies Utilized'
  }
]

const Stats = () => {
  const [statsData, setStatsData] = useState(stats)
  useEffect(() => {
    const fetchRepos = async () => {
      let currentPage = 1
      let perPage = 100 // Set max repos per page

      const response = await fetch(
        `https://api.github.com/users/Shah-Shail/repos?page=${currentPage}&per_page=${perPage}`
      )
      const data = await response.json()

      let allRepos = data.map((repo) => repo.name).length
      let totalReposStats = {
        num: allRepos,
        text: 'Total Repositories'
      }
      let updateStats = [...stats, totalReposStats]
      setStatsData(updateStats)
    }

    fetchRepos()
  }, [])

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {statsData?.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  suffix={item?.suffixNum}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats

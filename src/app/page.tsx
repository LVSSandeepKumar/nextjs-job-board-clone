import JobFilterSideBar from "@/components/JobFilterSideBar"
import JobListItem from "@/components/JobListItem"
import prisma from "@/lib/prisma"

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where : { approved : true},
    orderBy : { createdAt : 'desc'}
  })
  
  return (
      <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
        <div className="space-y-5 text-center">
          <h1 className="text-4xl font-extrabold tracking-light lg:text-5xl">Developer Jobs</h1>
          <p className="text-muted-foreground">Find your Dream job.</p>
        </div>

        <section className="flex flex-col md:flex-row gap-4">
          <JobFilterSideBar />
          <div className="space-y-4 grow">
            {jobs.map( job => (
              <JobListItem job={job} key={job.id} />
            ))}
          </div>
        </section>
        
      </main>
    )
}

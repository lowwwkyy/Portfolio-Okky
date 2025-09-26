import { BrainCircuit, Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate in Data Science and Software Development
                    </h3>

                    <p className="text-muted-foreground">
                        Currently im focusing on enhancing my skills in Data Science, with software development as my secondary expertise. Im always curious about new tech, excited to level up my problem-solving game, and eager to build solutions that actually makes a difference. I enjoy teaming up with others, learning on the go, and chasing every chance to grow along the way.
                    </p>

                    <p className="text-muted-foreground">
                        If you’re looking for someone driven, collaborative, and committed to growth, let’s connect. I’m open to internships or junior roles in ML/NLP, data science, and collaborations on conversational AI. You can reach me directly at okkyrades@gmail.com.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href="public/Projects/CV OKKY 2025.docx.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>

                </div>

                <div className="grid grid-cols-1 gap-6">

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <BrainCircuit className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Data Science</h4>
                                <p className="text-muted-foreground">Creating data-driven solutions to complex problems.</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Software Development</h4>
                                <p className="text-muted-foreground">Designing intuitive software solutions using agile methodologies.</p>
                            </div>
                        </div>   
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground">Leading projects and people to successes for both academic events and computer science projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        </div>
    </section>
}
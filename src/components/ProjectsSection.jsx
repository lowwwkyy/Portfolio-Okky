import { Description } from "@radix-ui/react-toast"
import { ArrowRight, ExternalLink, Github, Tags } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "BINUS CANTEEN",
        Description: "A mobile application that provides a plaform for students to order in advance from canteens at BINUS. Built using React Native for the frontend then Express.js for the backend, with AWS RDS and AWS S3 as the database.",
        imageUrl: "Projects/BinusCanteen.png",
        Tags: ["React", "Express.js", "Figma", "AWS"],
        demoUrl: "#",
        githubUrl: "https://github.com/AlbertNugroho/CanteenApp",
    },
    {
        id: 2,
        title: "Paper for Rice Disease Classification using Optuna",
        Description: "A research paper on comparing and optimizing 3 different deep learning architectures (VGG16, VGG19, ResNet50) with Optuna for rice leaf disease classification. Accepted in International Conference ICOBAR 2025 with Scopus Index",
        imageUrl: "Projects/ICOBAR.png",
        Tags: ["Python", "Sklearn", "Numpy", "TensorFlow"],
        demoUrl: "public/Projects/Optimizing Deep Learning Models with Optuna for Accurate Rice Leaf Disease Classification.pdf",
        githubUrl: "https://www.kaggle.com/code/okkysr/resnet50-rice-disease-detector-model?scriptVersionId=239734493",
    },
    {
        id: 3,
        title: "Premium Catering Website",
        Description: "A responsive catering service website built with Basic HTML CSS and JavaScript. Features include 5 components which includes Home, About, Testimonials, Product, Register. Designed using Figma to ensure a user-friendly experience.",
        imageUrl: "Projects/Premium-Catering-Website.png",
        Tags: ["HTML", "CSS", "JavaScript", "Figma"],
        demoUrl: "#",
        githubUrl: "#",
    },
]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                A showcase of my most notable projects, demonstrating my skills and expertise in techstacks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.Tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.Description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>

                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>


            <div className="text-center mt-12">
                <a href="https://github.com/lowwwkyy" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}
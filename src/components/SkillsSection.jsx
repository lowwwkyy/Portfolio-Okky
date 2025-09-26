import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // Languages
    {name: "Java", level: 85, category: "Languages"},
    {name: "C", level: 90, category: "Languages"},
    {name: "Python", level: 95, category: "Languages"},
    {name: "HTML", level: 85, category: "Languages"},
    {name: "CSS", level: 85, category: "Languages"},
    {name: "JavaScript", level: 85, category: "Languages"},
    {name: "SQL", level: 80, category: "Languages"},
    {name: "R", level: 80, category: "Languages"},

    // Framework/Libraries
    {name: "React", level: 85, category: "Framework/Libraries"},
    {name: "Tailwindcss", level: 85, category: "Framework/Libraries"},
    {name: "Pytorch", level: 75, category: "Framework/Libraries"},
    {name: "Pandas", level: 95, category: "Framework/Libraries"},
    {name: "Numpy", level: 95, category: "Framework/Libraries"},
    {name: "Sklearn", level: 95, category: "Framework/Libraries"},
    {name: "Hugging Face", level: 85, category: "Framework/Libraries"},

    // Developer Tools
    {name: "Git", level: 90, category: "Developer Tools"},
    {name: "Google Cloud Platform", level: 95, category: "Developer Tools"},
    {name: "AWS", level: 75, category: "Developer Tools"},
    {name: "Kaggle", level: 95, category: "Developer Tools"},
    {name: "Figma", level: 90, category: "Developer Tools"},
    {name: "Canva", level: 95, category: "Developer Tools"},
]

const categories = ["All", "Languages", "Framework/Libraries", "Developer Tools"]

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("All")

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                    key={key} 
                    onClick={() => setActiveCategory(category)} 
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground"
                        : "px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"         
                    )} 
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* skills percentage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name}</h3>
                        </div>

                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: skill.level + "%"}}>

                            </div>
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground"> {skill.level}%</span>
                        </div>
                    </div>       
                ))}
            </div>



        </div>
    </section>
};
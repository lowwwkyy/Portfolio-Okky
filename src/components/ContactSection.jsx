import { Github, Instagram, Link, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"

export const ContactSection = () => {

    // const hamdleSubmit = (e) => {
    //     e.preventDefault();

    //     setTimeout(() => {

    //     }, 1500);
    // }

    return (
        <section 
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
            >
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Get In <span className="text-primary">Touch</span>
                    </h2>

                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Feel free to reach out for collaborations, inquiries, or just to say hello! I'm always open to connecting with fellow developers and tech enthusiasts.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-medium">Email</h4>
                                        <a href="mailto:okkyrades@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            okkyrades@gmail.com
                                        </a>
                                    </div>
                                </div>



                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-medium">Phone</h4>
                                        <a href="tel:+6285829701074" className="text-muted-foreground hover:text-primary transition-colors">
                                            +62 858-2970-1074
                                        </a>
                                    </div>
                                </div>



                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <MapPin className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-medium">Location</h4>
                                        <a className="text-muted-foreground hover:text-primary transition-colors">
                                            Jakarta, Indonesia
                                        </a>
                                    </div>
                                </div>


                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Link className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-medium">LinkedIn</h4>
                                        <a href="https://www.linkedin.com/in/okkysudibyorades/" className="text-muted-foreground hover:text-primary transition-colors">
                                            www.linkedin.com/in/okkysudibyorades/
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4 className="font-medium mb-4">Connect With Me</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a href="https://www.linkedin.com/in/okkysudibyorades/" target="_blank">
                                        <Linkedin />
                                    </a>
                                    
                                    <a href="https://www.instagram.com/okkysr/" target="_blank">
                                        <Instagram />
                                    </a>

                                    <a href="https://github.com/lowwwkyy" target="_blank">
                                        <Github />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card p-8 rounded-lg shadow-xs">
                            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>

                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="name..."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>

                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="email..."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>

                                    <textarea
                                        id="message" 
                                        name="message" 
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                        placeholder="message..."
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                                                  

                                )}
                                >
                                    Send Message
                                    <Send size={15}/> 

                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                
        </section>
    )
}
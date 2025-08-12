import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Badge } from "@/src/components/ui/badge";
import { useToast } from "@/src/hooks/use-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Calendar,
  MessageSquare,
  Zap,
  Instagram,
  Loader2,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string()
      .min(5, "Subject must be at least 5 characters")
      .max(100, "Subject must be less than 100 characters")
      .required("Subject is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message must be less than 500 characters")
      .required("Message is required"),
    projectType: Yup.string(),
  });

  // Initial form values
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
  };

  // Form submission handler
  const handleSubmit = async (
    values: typeof initialValues,
    {
      resetForm,
      setSubmitting,
    }: {
      resetForm: () => void;
      setSubmitting: (isSubmitting: boolean) => void;
    },
  ) => {
    try {
      setIsSubmitting(true);

      const response = await axios.post("/api/sendemail", values);

      toast({
        title: "Message Sent Successfully! ✨",
        description:
          "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      resetForm();
    } catch (error) {
      console.error("Error sending message:", error);
      let errorMessage = "Something went wrong. Please try again later.";

      if (axios.isAxiosError(error)) {
        // Handle axios-specific errors
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast({
        title: "Failed to Send Message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zaidrafiq11@gmail.com",
      href: "mailto:zaidrafiq11@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 302 7924491",
      href: "tel:+923027924491",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Madina Heights, Johar Town, Lahore",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/zaidrafiq",
      color: "hover:text-foreground",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zaidrafiq",
      color: "hover:text-blue-400",
    },
  ];

  const projectTypes = [
    "React Native App",
    "Cross-Platform Mobile",
    "Mobile App Development",
    "Full Mobile Solution",
    "Consultation",
    "Other",
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something <span className="text-primary">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and
            explore how we can create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="glass p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Get in Touch</h3>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-background/20 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Card className="glass p-6">
                <h4 className="font-semibold mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-lg glass hover:bg-accent hover:text-accent-foreground transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="glass p-8">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  setFieldValue,
                  isSubmitting: formikSubmitting,
                }) => (
                  <Form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name *
                        </label>
                        <Field
                          as={Input}
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          className={`glass ${
                            errors.name && touched.name
                              ? "border-destructive"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-sm text-destructive"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </label>
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          className={`glass ${
                            errors.email && touched.email
                              ? "border-destructive"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-sm text-destructive"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="projectType"
                        className="text-sm font-medium"
                      >
                        Project Type
                      </label>
                      <Select
                        value={values.projectType}
                        onValueChange={(value) =>
                          setFieldValue("projectType", value)
                        }
                      >
                        <SelectTrigger className="glass">
                          <SelectValue placeholder="Select Project Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {projectTypes.map((project, index) => (
                              <SelectItem key={index} value={project}>
                                {project}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <ErrorMessage
                        name="projectType"
                        component="div"
                        className="text-sm text-destructive"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <Field
                        as={Input}
                        id="subject"
                        name="subject"
                        placeholder="Let's discuss your project"
                        className={`glass ${
                          errors.subject && touched.subject
                            ? "border-destructive"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-sm text-destructive"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </label>
                      <Field
                        as={Textarea}
                        id="message"
                        name="message"
                        placeholder="Tell me about your project, timeline, and requirements..."
                        rows={6}
                        className={`glass resize-none ${
                          errors.message && touched.message
                            ? "border-destructive"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-sm text-destructive"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="group flex-1"
                        disabled={isSubmitting || formikSubmitting}
                      >
                        {isSubmitting || formikSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">
                    Usually responds within 24 hours
                  </Badge>
                  <Badge variant="secondary">Free consultation available</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  I'm currently available for new projects and would love to
                  hear about your ideas. Whether you need a complete solution or
                  just want to bounce ideas around, I'm here to help.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

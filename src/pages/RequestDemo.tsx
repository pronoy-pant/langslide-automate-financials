import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20),
  language: z.string().min(1, "Language is required"),
  companyHeadcount: z.string().min(1, "Company headcount is required"),
  useCase: z.string().trim().max(1000, "Use case must be less than 1000 characters").optional(),
});

type FormData = z.infer<typeof formSchema>;

const RequestDemo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      toast.success("Demo request submitted successfully! We'll be in touch soon.");
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                Get Started
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Request a Demo
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              To prepare for our demo call, please share a bit about yourself and the challenges you're hoping to address with Langslide.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white rounded-2xl shadow-medium p-8 md:p-12 border border-border">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="firstName"
                  {...register("firstName")}
                  placeholder="John"
                  className={errors.firstName ? "border-destructive" : ""}
                />
                {errors.firstName && (
                  <p className="text-sm text-destructive">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">
                  Last Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="lastName"
                  {...register("lastName")}
                  placeholder="Doe"
                  className={errors.lastName ? "border-destructive" : ""}
                />
                {errors.lastName && (
                  <p className="text-sm text-destructive">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">
                Work Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="john.doe@company.com"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="+1 (555) 123-4567"
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>

            {/* Language */}
            <div className="space-y-2">
              <Label htmlFor="language">
                Language <span className="text-destructive">*</span>
              </Label>
              <Select onValueChange={(value) => setValue("language", value)}>
                <SelectTrigger className={errors.language ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                  <SelectItem value="mandarin">Mandarin</SelectItem>
                  <SelectItem value="japanese">Japanese</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.language && (
                <p className="text-sm text-destructive">{errors.language.message}</p>
              )}
            </div>

            {/* Company Headcount */}
            <div className="space-y-2">
              <Label htmlFor="companyHeadcount">
                Company Headcount <span className="text-destructive">*</span>
              </Label>
              <Select onValueChange={(value) => setValue("companyHeadcount", value)}>
                <SelectTrigger className={errors.companyHeadcount ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-500">201-500 employees</SelectItem>
                  <SelectItem value="501-1000">501-1,000 employees</SelectItem>
                  <SelectItem value="1001-5000">1,001-5,000 employees</SelectItem>
                  <SelectItem value="5001+">5,001+ employees</SelectItem>
                </SelectContent>
              </Select>
              {errors.companyHeadcount && (
                <p className="text-sm text-destructive">{errors.companyHeadcount.message}</p>
              )}
            </div>

            {/* Use Case */}
            <div className="space-y-2">
              <Label htmlFor="useCase">
                How do you want to use Langslide?
              </Label>
              <Textarea
                id="useCase"
                {...register("useCase")}
                placeholder="Tell us about your use case and what you're hoping to achieve..."
                className="min-h-[120px]"
              />
              {errors.useCase && (
                <p className="text-sm text-destructive">{errors.useCase.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>

            {/* Privacy Notice */}
            <p className="text-xs text-muted-foreground leading-relaxed">
              Langslide uses your contact information to communicate with you about our products and services. 
              You may unsubscribe at any time. Please review our{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              {" "}to learn about our privacy practices, data protection measures, and unsubscribe procedures.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;

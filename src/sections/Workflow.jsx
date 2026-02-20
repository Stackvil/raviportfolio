import { DevOpsPipeline } from "../components/ui/DevOpsPipeline";
import { Section } from "../components/ui/Section";

export const Workflow = () => {
    return (
        <Section id="workflow" className="bg-dark py-20 border-t border-white/5">


            <div className="w-full max-w-6xl mx-auto px-4">
                <DevOpsPipeline />
            </div>
        </Section>
    );
};

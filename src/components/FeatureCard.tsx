type FeatureCardProps = {
    title: string;
    description: string;
  };
  
  export default function FeatureCard({ title, description }: FeatureCardProps) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition hover:shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    );
  }  
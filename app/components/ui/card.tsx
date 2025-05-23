// app/components/ui/Card.tsx
interface CardProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function Card({ children, className = '' }: CardProps) {
    return (
      <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
        {children}
      </div>
    );
  }
  
  interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function CardHeader({ children, className = '' }: CardHeaderProps) {
    return (
      <div className={`px-6 py-4 ${className}`}>
        {children}
      </div>
    );
  }
  
  interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function CardTitle({ children, className = '' }: CardTitleProps) {
    return (
      <h3 className={`text-xl font-semibold ${className}`}>
        {children}
      </h3>
    );
  }
  
  interface CardContentProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function CardContent({ children, className = '' }: CardContentProps) {
    return (
      <div className={`px-6 py-4 ${className}`}>
        {children}
      </div>
    );
  }
  
  interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function CardFooter({ children, className = '' }: CardFooterProps) {
    return (
      <div className={`px-6 py-4 border-t border-gray-200 ${className}`}>
        {children}
      </div>
    );
  }
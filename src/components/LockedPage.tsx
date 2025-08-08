// components/LockedPage.tsx

import { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from './buttons';
import { Card } from './card';

interface ProjectData {
    title: string;
    description: string;
    src: string;
    alt: string;
    isLock: boolean;
}

interface LockedPageProps {
    projectData: ProjectData;
    children?: React.ReactNode;
}

const LockedPage: React.FC<LockedPageProps> = ({ projectData, children }) => {
    const [password, setPassword] = useState<string>('');
    const [isLocked, setIsLocked] = useState<boolean>(projectData.isLock);
    const [error, setError] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const correctPassword = 'Welcome@123'; // Example password (you can change this)

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (error) setError(false);
    };

    const handleSubmitPassword = () => {
        if (password === correctPassword) {
            setIsLocked(false);
        } else {
            setError(true);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmitPassword();
        }
    };

    if (isLocked) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center bg-stone-50">
                <Card className="max-w-md p-8 w-full mx-4 shadow-xl">
                    <div className="text-center mb-6">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-stone-100 rounded-full">
                                <Lock className="h-8 w-8 text-stone-600" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-thin text-stone-900 mb-2">
                            This project is locked
                        </h2>
                        <p className="text-stone-600 text-sm">
                            Enter the password to access this case study
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={handlePasswordChange}
                                onKeyPress={handleKeyPress}
                                className={`w-full p-3 border rounded-lg pr-10 ${
                                    error 
                                        ? 'border-red-300 focus:border-red-500' 
                                        : 'border-stone-300 focus:border-stone-500'
                                } focus:outline-none focus:ring-1 focus:ring-stone-500`}
                                placeholder="Enter password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600"
                            >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm text-center">
                                Incorrect password, please try again.
                            </p>
                        )}

                        <Button
                            onClick={handleSubmitPassword}
                            variant="primary"
                            size="lg"
                            className="w-full"
                        >
                            Unlock Project
                        </Button>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-stone-500">
                            Need the password? <a href='https://www.linkedin.com/in/segunoroyo/' >Contact me for access.</a>
                        </p>
                    </div>
                </Card>
            </div>
        );
    }

    // If unlocked, render the children (project content)
    return <>{children}</>;
};

export default LockedPage;

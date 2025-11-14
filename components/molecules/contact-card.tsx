export interface ContactCardProps {
    className?: string;
    title: string;
    links: {label: string, url: string}[];
}

export const ContactCard: React.FC<ContactCardProps> = ({ title, links }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-64 transform transition duration-300 hover:scale-105 hover:bg-blue-100">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <ul className="text-gray-700 space-y-2">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} className="hover:underline">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};  

export default ContactCard;
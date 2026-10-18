type SectionTitleProps = {
  title: string;
  subtitle?: string;
  as?: 'h1' | 'h2';
};

// Titre de section au format <Titre/>, identique sur tout le site
const SectionTitle = ({ title, subtitle, as: Tag = 'h2' }: SectionTitleProps) => (
  <div className="text-center mb-12">
    <Tag className="text-3xl md:text-4xl font-bold">
      <span className="text-secondary">&lt;</span>
      {title}
      <span className="text-secondary">/&gt;</span>
    </Tag>
    {subtitle && <p className="mt-3 text-white/60 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionTitle;

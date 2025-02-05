interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <div>
      <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
        {children}
      </h1>
    </div>
  );
};

export default SectionHeading;

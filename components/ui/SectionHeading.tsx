type SectionHeadingProps = {
  title: string;
};

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h2
      style={{
        fontSize: "20px",
        fontWeight: 700,
        marginBottom: "12px",
        color: "#0f172a",
      }}
    >
      {title}
    </h2>
  );
}
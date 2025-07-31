import FlowingMenu from "../animation/FlowingMenu";

export default function ValuesSection() {
 
  const coreValues = [
    { text: 'Integrity',quote: 'I act with honesty and honor in all my actions.' },
    { text: 'Collaboration', quote: 'I achieve more when I work together with others.' },
    { text: 'Innovation',    quote: 'I embrace creativity and continuously seek improvement.' },
    { text: 'Respect',    quote: 'I treat others with courtesy and value their perspectives.' },
  ]

  return (
    <section className="pt-10 pb-15">
      <div className="max-w-4xl mx-auto px-4">
       
        <div className="h-64">
          <FlowingMenu items={coreValues} />
        </div>
      </div>
    </section>
  )
}

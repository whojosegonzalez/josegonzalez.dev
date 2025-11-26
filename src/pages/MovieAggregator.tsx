import ShowcaseLayout from "../layouts/ShowcaseLayout";

export default function MovieAggregator() {
  return (
    <ShowcaseLayout
      title="Movie Aggregator"
      subtitle="A Big Data experiment using Hadoop and MapReduce to analyze millions of movie ratings."
    >
      <p>
        <strong>Overview</strong>
        <br />
        This project was designed to process the massive MovieLens dataset to uncover trends in user behavior 
        and rating patterns. By leveraging the MapReduce programming model, the system efficiently processes 
        large-scale data in parallel.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li><strong>Scalable Processing:</strong> Built on Hadoop to handle datasets larger than memory.</li>
        <li><strong>Custom Mappers & Reducers:</strong> Java-based logic to filter, sort, and aggregate user ratings.</li>
        <li><strong>Insight Generation:</strong> Calculates average ratings per genre, user activity heatmaps, and year-over-year trends.</li>
      </ul>

      <h3>Technical Challenges</h3>
      <p>
        One of the biggest challenges was handling data skew—where certain blockbusters had exponentially more 
        ratings than niche films, causing uneven load distribution among reducers. I implemented a custom 
        partitioner to balance the load more effectively.
      </p>

      <blockquote>
        "The goal wasn't just to calculate averages, but to understand the <em>shape</em> of the data."
      </blockquote>
      
      <p>
        <em>(Screenshots and GitHub code snippets coming soon)</em>
      </p>
    </ShowcaseLayout>
  );
}
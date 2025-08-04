import { GetSimilarApi } from "@/hooks/GetSimilarApi";
import { Similar } from "@/app/_components/Similar";

interface ParamType {
  params: Promise<{
    id: string;
  }>;
}

const SimilarPage = async ({ params }: ParamType) => {
  const { id } = await params;

  const resultSimilar = await GetSimilarApi(id);

  return (
    <div>
      <Similar resultSimilar={resultSimilar} />
    </div>
  );
};

export default SimilarPage;

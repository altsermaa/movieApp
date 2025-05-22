import { GetSimilarApi } from "@/hooks/GetSimilarApi";
import { Similar } from "@/app/_components/Similar";

interface ParamType {
  params: {
    id: string;
  };
}

const SimilarPage = async ({ params }: ParamType) => {
  const { id } = params;

  const resultSimilar = await GetSimilarApi(id);

  return (
    <div>
      <Similar resultSimilar={resultSimilar} />
    </div>
  );
};

export default SimilarPage;

import { ProjectPageParams } from "@/app/(portfolio)/[title]/page";
import { Modal } from "./(modal)/modal";
import { Project } from "@/features/projects/components/Project";

export default async function ProjectModal({ params }: ProjectPageParams) {
  const title = (await params).title;

  return (
    <Modal>
      <Project title={title} />
    </Modal>
  );
}

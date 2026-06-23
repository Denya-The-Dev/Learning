export const MODEL = "Mistral_Nemo";

export function formatMessage(role, content) {
  return {
    role,
    content,
  };
}

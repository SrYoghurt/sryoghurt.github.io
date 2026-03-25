import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <footer
      className="mx-auto flex w-[92%] max-w-275 flex-col items-start gap-3 border-t border-base-300 py-4 text-sm text-base-content/60 sm:flex-row sm:items-center sm:justify-between sm:py-6"
      id="contacto"
    >
      <p>© {new Date().getFullYear()} Milton Monsalves Veas</p>
      <div>
        <a href="https://github.com/SrYoghurt" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/milton-javier-monsalves-veas/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
      <p>Hecho con React + Tailwind</p>
    </footer>
  )
}

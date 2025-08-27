

function Footer() {
  return (
    <footer className='py-4 bg-background border-t'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p className='text-sm text-muted-foreground'>
            © 2025 CodeMat. All rights reserved.
          </p>
          {/* <div className='flex space-x-4 mt-4 md:mt-0'>
            <Button variant='ghost' size='icon' asChild>
              <Link href='https://github.com/codemat'>
                <Github className='h-5 w-5' />
              </Link>
            </Button>
            <Button variant='ghost' size='icon' asChild>
              <Link href='https://linkedin.com/in/codemat'>
                <Linkedin className='h-5 w-5' />
              </Link>
            </Button>
            <Button variant='ghost' size='icon' asChild>
              <Link href='https://twitter.com/codemat'>
                <Twitter className='h-5 w-5' />
              </Link>
            </Button>
            <Button variant='ghost' size='icon' asChild>
              <Link href='mailto:ask@soft-lutions.com.ng'>
                <Mail className='h-5 w-5' />
              </Link>
            </Button>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

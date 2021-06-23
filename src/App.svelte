<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Image from 'svelte-image';
  import Tailwind from 'components/Tailwind.svelte';
  import Footer from 'partials/Footer.svelte';
  import Navbar from 'partials/Navbar.svelte';
  import About from 'routes/About.svelte';
  import Home from 'routes/Home.svelte';
  import NotFound from 'routes/NotFound.svelte';
</script>

<Tailwind />

<main class="text-center p-4 max-w-xs mx-auto sm:max-w-none">
  <Router>

    <Navbar>
      <Image src="./images/ikea-logo.png" />
      <Link to="/"> Home. </Link>
      <Link to="/about"> About. </Link>
    </Navbar>

    <Route path="/" component="{Home}" />
    <Route path="/about" component="{About}" />
    <Route component="{NotFound}" />

  </Router>
</main>

<Footer />

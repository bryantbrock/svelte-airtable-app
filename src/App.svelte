<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Tailwind from 'components/Tailwind.svelte';
  import About from 'routes/About.svelte';
  import Home from 'routes/Home.svelte';
  import NotFound from 'routes/NotFound.svelte';
</script>

<Tailwind />

<main class="text-center p-4 max-w-xs mx-auto sm:max-w-none">
  <Router>

    <nav>
      <Link to="/"> Home. </Link>
      <Link to="/about"> About. </Link>
    </nav>

    <Route path="/" component="{Home}" />
    <Route path="/about" component="{About}" />
    <Route component="{NotFound}" />

  </Router>
</main>

<script>
    export let headers;
    export let data;
  </script>
  
  <!--
    Both headers and data can be an array of either..
      - strings or
      - objects = {data, className}
  -->
  
  <table cellspacing=0>
    <thead>
      <tr>
        {#each headers as header}
          {#if typeof header === 'string'}
            <th>{header}</th>
          {:else}
            <th class={header.class}>{@html header.data}</th>
          {/if}
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each data as rowData}
        <tr>
          {#each rowData as cellData}
            {#if typeof cellData === 'string'}
              <td>{cellData}</td>
            {:else}
              <td class={cellData.class}>{cellData.data}</td>
            {/if}
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
  
  
  <style>
    th, td {
      border-bottom: 1px solid #e4e4e4;
      padding: .8em 0;
    }
    table {
      width: 100%;
      table-layout: auto;
      margin: 1em 0;
    }
    table,
    td,
    th {
      border-collapse: collapse;
    }
    .text-right {
      text-align: right;
    }
    .text-left {
      text-align: left;
    }
    .pr-2 {
      padding-right: 2em;
    }
    .pr-1 {
      padding-right: 1em;
    }
    .w-40 {
      width: 40%;
    }
    .w-60 {
      width: 60%;
    }
    .Nation {
      color: #87cefa;
      font-weight: bold;
    }
    .State {
      color: #1e90ff;
      font-weight: bold;
    }
    .Region {
      color: #000080;
      font-weight: bold;
    }
  </style>
$('#terminal').terminal({
        echo: function(arg1) {
            this.echo(arg1);
        },
//                rpc: 'some_file.php',
        calc: {
            add: function(a, b) {
                this.echo(a+b);
            },
            sub: function(a, b) {
                this.echo(a-b);
            }
        }
    },
    {
        prompt: '[anoop] > ',
        greetings: "",
        name: 'Visitor',
        completion: true

    });

var todos = {}; // namespace

(function(){
    'use-strict';
    var ENTER_KEY = 13;
    var ESCAPE_KEY = 27;
    function create(e){
        console.log('create()');
        var $input = $(e.target);
        var val = $input.val().trim();

        if(e.which !== ENTER_KEY || !val){
            return;
        }

        var todoItem = {
            id : (new Date()).getTime(),
            title : val,
            complete: false
        };

        $input.val('');

        var html = '\
            <li class="" data-id="'+todoItem.id+'">\
                <div class="view">\
                    <input class="toggle" type="checkbox" />\
                    <label>'+todoItem.title+'</label>\
                    <button class="destroy"></button>\
                </div>\
                <input class="edit" value="'+todoItem.title+'">\
            </li>';
        $("#todo-list").append(html);
    }
    function toggle(event){
        var el = event.target;
        $(el).closest('li').toggleClass('completed');
    }
    function destroy(event){
        var el = event.target;

        $(el).closest('li').remove();
    }
    // export
    todos.create = create;
    todos.destroy = destroy;
    todos.toggle = toggle;
}());
//constant


$("#new-todo").on('keyup', todos.create);

$("#todo-list").on("click", ".destroy", todos.destroy);

$("#todo-list").on("change", ".toggle", todos.toggle);



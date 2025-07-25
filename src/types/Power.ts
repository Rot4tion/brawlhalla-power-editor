//power type for typescript frontend, must be serializable into string for Rust backend
export type Power = {
  power_name?: string;
  power_id?: string;
  order_id?: string;
  dev_notes?: string;
  mission_tags?: string;
  priority?: string;
  cast_sound_event?: string;
  hit_sound_event?: string;
  item_hit_sound_event?: string;
  target_method?: string;
  parent_item?: string;
  origin_power?: string;
  is_air_power?: string;
  is_signature?: string;
  is_antiair?: string;
  sig_mode_swaps_move?: string;
  aoe_radius_x?: string;
  aoe_radius_y?: string;
  center_offset_x?: string;
  center_offset_y?: string;
  cast_impulse_x?: string;
  cast_impulse_y?: string;
  fire_impulse_x?: string;
  fire_impulse_y?: string;
  fire_impulse_max_x?: string;
  impulse_max_on_dc_only?: string;
  speed_limit?: string;
  speed_limit_y?: string;
  speed_limit_attack?: string;
  speed_limit_backward?: string;
  speed_limit_attack_backward?: string;
  self_impulse_on_hit?: string;
  end_on_hit?: string;
  cancel_gravity?: string;
  wall_cancel?: string;
  allow_move?: string;
  allow_recover_move?: string;
  allow_jump_during_recover?: string;
  allow_leave_ground?: string;
  allow_hit_on_zero_damage?: string;
  accel_mult?: string;
  backward_accel_mult?: string;
  turn_off_dampening?: string;
  keep_ground_friction?: string;
  ignore_ground_restrict?: string;
  do_not_bounce_off_no_slide_ceiling?: string;
  no_slide_ceiling_buffer?: string;
  cast_anim?: string;
  hurtbox?: string;
  cast_time?: string;
  fixed_recover_time?: string;
  recover_time?: string;
  antigrav_time?: string;
  g_cancel_time?: string;
  ignore_forced_fall_time?: string;
  show_cloud_time?: string;
  cooldown_time?: string;
  ignore_cd_override?: string;
  on_hit_cooldown_time?: string;
  shake_time?: string;
  disable_shake?: string;
  only_shake_once?: string;
  shake_all_cams?: string;
  fixed_min_charge_time?: string;
  min_cancel_time?: string;
  lose_invuln_time?: string;
  base_damage?: string;
  variable_impulse?: string;
  fixed_impulse?: string;
  minimum_impulse?: string;
  post_hit_damage_multiplier?: string;
  post_hit_impulse_multiplier?: string;
  impulse_offset_x?: string;
  impulse_offset_y?: string;
  impulse_offset_max_x?: string;
  impulse_to_point?: string;
  to_point_change_x?: string;
  to_point_change_y?: string;
  to_point_change_dmg?: string;
  lock_to_45_degrees?: string;
  downward_force_mult?: string;
  mirror_impulse_offset?: string;
  mirror_offset_center?: string;
  ignore_strength?: string;
  accept_input?: string;
  held_dir_offsets?: string;
  di_max_angle?: string;
  impulse_on_heavy?: string;
  item_speed_damage?: string;
  item_speed_impulse?: string;
  item_hit_elasticity?: string;
  air_time_mult_only?: string;
  is_multihit?: string;
  min_time_between_hits?: string;
  inherit_already_hit?: string;
  interrupt_threshold?: string;
  can_damage_everyone?: string;
  can_assist?: string;
  consumes_weapon?: string;
  fixed_stun_time?: string;
  hold_hit_ents?: string;
  hold_offset_x?: string;
  hold_offset_y?: string;
  update_held_ents?: string;
  destroys_item_on_hit?: string;
  grab_interpolate_time?: string;
  grab_anim?: string;
  grab_anim_speed?: string;
  grab_force_update?: string;
  uninterruptable?: string;
  can_change_direction?: string;
  combo_name?: string;
  combo_override_if_hit?: string;
  combo_override_if_release?: string;
  combo_override_if_wall?: string;
  combo_override_if_button?: string;
  origin_override_if_in_mode?: string;
  combo_override_if_dir?: string;
  combo_override_if_interrupt?: string;
  ignore_button_on_hit?: string;
  ignore_button_on_miss?: string;
  combo_use_same_target_pos?: string;
  use_collision_as_target_pos?: string;
  combo_use_target_as_source?: string;
  combo_use_same_source_pos?: string;
  bg_power_on_fire?: string;
  bg_cast_idx?: string;
  allow_bg_interrupt?: string;
  populate_active_power_hits?: string;
  populate_bg_hits?: string;
  exhausted_version?: string;
  gc_version?: string;
  momentum_version?: string;
  team_taunt_power?: string;
  anim_layer?: string;
  fx_layer?: string;
  is_world_cast_gfx?: string;
  custom_art_cast_gfx?: string;
  delay_cast_gfx_to_first_fire?: string;
  delay_cast_gfx_clean_up?: string;
  cast_anim_source?: string;
  do_not_send_sync?: string;
  is_throw?: string;
  cannot_attack_around_corners?: string;
  force_hit_through_soft_plat?: string;
  force_face_right?: string;
  collision_power_offset_x?: string;
  collision_power_offset_y?: string;
  cast_gfx_anim_file?: string;
  cast_gfx_anim_class?: string;
  cast_gfx_anim_scale?: string;
  cast_gfx_fire_and_forget?: string;
  cast_gfx_move_anim_speed?: string;
  cast_gfx_flip_anim?: string;
  cast_gfx_tint?: string;
  cast_gfx_rotation?: string;
  is_world_fire_gfx?: string;
  is_attack_fire_gfx?: string;
  custom_art_fire_gfx?: string;
  fire_anim_source?: string;
  fire_gfx_anim_file?: string;
  fire_gfx_anim_class?: string;
  fire_gfx_anim_scale?: string;
  fire_gfx_fire_and_forget?: string;
  fire_gfx_move_anim_speed?: string;
  fire_gfx_flip_anim?: string;
  fire_gfx_tint?: string;
  fire_gfx_rotation?: string;
  is_world_hit_gfx?: string;
  only_once_hit_gfx?: string;
  owner_facing_hit_gfx?: string;
  play_hit_gfx_behind?: string;
  hit_anim_source?: string;
  hit_react_anim?: string;
  hit_gfx_anim_file?: string;
  hit_gfx_anim_class?: string;
  hit_gfx_anim_scale?: string;
  hit_gfx_fire_and_forget?: string;
  hit_gfx_tint?: string;
};

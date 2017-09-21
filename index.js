module.exports = function Aesthetics(dispatch) {

const Command = require('command'),
	command = Command(dispatch)
var aero = ["S1EngineResources.DefaultAero","ab1_aeroset.AERO.DST_AB1_AERO","acn_aeroset.AERO.SPR_Corruption_Forest_AERO","acn_aeroset.AERO.SPR_Corruption_AERO_New","acn_aeroset.AERO.SPR_Corruption_AERO_FINAL","acn_aeroset.AERO.SPR_Corruption_AERO","acn_aeroset.AERO.BARAKA_Test_AERO","acn_aeroset.AERO.Balderon_AERO_FINAL","acn_aeroset.AERO.Balderon_AERO","aen_aeroset.AERO.VOC_Fire_Mountain_renew_AERO","aen_aeroset.AERO.VOC_Fire_Mountain_AERO","aen_aeroset.AERO.VOC_Fire_Mountain_02_AERO","aen_aeroset.AERO.Serpent_Island_Quest_AERO_FINAL","aen_aeroset.AERO.Serpent_Island_B_AERO_Renew","aen_aeroset.AERO.Serpent_Island_B_AERO_FINAL","aen_aeroset.AERO.Serpent_Island_AERO_FINAL","aen_aeroset.AERO.JungleCoast_AERO_renew_FINAL","aen_aeroset.AERO.JungleCoast_AERO_FINAL","aen_aeroset.AERO.JungleCoast_AERO_c_FINAL","aen_aeroset.AERO.JUG_Serpent_Island_AERO","aen_aeroset.AERO.JUG_PIC_AERO","aen_aeroset.AERO.JUG_Misty_Island_FINAL_noRain","aen_aeroset.AERO.JUG_Misty_Island_FINAL","aen_aeroset.AERO.JUG_Misty_Island_AERO","aen_aeroset.AERO.JUG_Misty_Island_02_AERO","aen_aeroset.AERO.JUG_CourtOfGDT_AERO_New","aen_aeroset.AERO.JUG_CourtOfGDT_AERO","aen_aeroset.AERO.JUG_Continent_AERO_FINAL","aen_aeroset.AERO.JUG_Continent_AERO","aen_aeroset.AERO.JUG_Castanica_AERO","aen_aeroset.AERO.JUC_Serpent_Island_Coast_AEROSet","aen_aeroset.AERO.GoldTemple_Outdoor_Renew","aen_aeroset.AERO.AEN_C_Misty_Island_Outdoor_AERO","aen_aeroset.AERO.AEN_C_Jungle_renew_AERO","aen_aeroset.AERO.AEN_B_NearVolcano_AERO","aen_aeroset.AERO.AEN_A_VOC_Fire_Mountain_renew_Upper_AERO","aen_aeroset.AERO.AEN_A_VOC_Fire_Mountain_renew_AERO","AL_AERO.AERO.AL_Academy_AERO","AL_AERO.AERO.AL_Alchemy_AERO","AL_AERO.AERO.AL_Barrack_AERO","AL_AERO.AERO.AL_City_02_AERO","AL_AERO.AERO.AL_City_AERO","AL_AERO.AERO.AL_Default_AERO","AL_AERO.AERO.AL_FB_AERO","AL_AERO.AERO.AL_Forge_AERO","AL_AERO.AERO.AL_GStar09_AERO","AL_AERO.AERO.AL_Sewing_AERO","AL_AERO.AERO.AL_SkyCastle_AERO","AL_AERO.AERO.AL_Square_AERO","AL_AERO.AERO.AL_Store_AERO","AL_AERO.AERO.AL_Union_AERO","AL_AERO.AERO.HX1_AERO","AL_AeroSet.General.S1_AL_AERO2","AL_AeroSet.General.S1_AL_AERO","AL_SL.MI.AeroSet_1","anc_aeroset.AERO.SPR_Lumberyard_W_AERO_FINAL","anc_aeroset.AERO.SPR_Lumberyard_W_AERO","anc_aeroset.AERO.SPR_Lumberyard_fairyLake_AERO","anc_aeroset.AERO.SPR_Lumberyard_fairy_AERO","anc_aeroset.AERO.SPR_Lumberyard_Deva_AERO","anc_aeroset.AERO.SPR_Inner_Lumberyard_W_AERO_FINAL","anc_aeroset.AERO.SPR_Hookian_Swamp_AERO_FINAL","anc_aeroset.AERO.SPR_Hookian_Swamp_AERO","anc_aeroset.AERO.SPR_Forgotten_Forest_AERO_New","anc_aeroset.AERO.SPR_Forgotten_Forest_AERO_FINAL","anc_aeroset.AERO.SPR_Forgotten_Forest_AERO","anc_aeroset.AERO.Knowledge_Hill_terror_AEROSet","anc_aeroset.AERO.Knowledge_Hill_AEROSet","anc_aeroset.AERO.AUT_GodWarrior_Field_AERO","ANC_B_FV.AERO.SPR_Hookian_FV02_AERO_FINAL","ANC_B_FV.AERO.SPR_Hookian_FV_AERO_FINAL","ANC_WaterFall.AERO.AERO","asc_aeroset.AERO.DST_ASC_AERO","ase_aeroset.AERO.Poporion_AERO","ase_aeroset.AERO.AUN_Vampir_Valley_AERO_New","ase_aeroset.AERO.AUN_Vampir_Valley_AERO_FINAL","ase_aeroset.AERO.AUN_Vampir_Valley_AERO","ase_aeroset.AERO.AUN_PoraElinu_AERO","ase_aeroset.AERO.AUN_Moon_Lake_AERO_FINAL","ase_aeroset.AERO.AUN_Moon_Lake_AERO","ase_aeroset.AERO.AUN_Insanity_Hill_GC_movie_AERO","ase_aeroset.AERO.AUN_Insanity_Hill_AERO_New","ase_aeroset.AERO.AUN_Insanity_Hill_AERO_FINAL","ase_aeroset.AERO.AUN_Insanity_Hill_AERO","ase_aeroset.AERO.AUN_HeavensFall_Vill_AERO_New","ase_aeroset.AERO.AUN_HeavensFall_Vill_AERO_FINAL","ase_aeroset.AERO.AUN_HeavensFall_Vill_AERO","ase_aeroset.AERO.ASE_B_MoonCastle_AERO","ase_aeroset.AERO.ACE_Insanity_Hill_AERO_FINAL","EX_ASE_terrain.AERO.EX_ASE_AERO","EX_ASE_terrain.AERO.EX_ASE_AERO_2","EX_ASE_terrain.AERO.EX_ASE_AERO_In","asw_aeroset.AERO.SPR_Rebellion_Plain_AERO_FINAL","asw_aeroset.AERO.DST_TOC_AERO_FINAL","asw_aeroset.AERO.DST_RoadOfGold_AERO_FINAL","asw_aeroset.AERO.DST_RestOfDesert_AERO_FINAL","asw_aeroset.AERO.DST_NestOfBasilisk_AERO_FINAL","asw_aeroset.AERO.DST_Giants_LostCity_AERO_FINAL","atw_aeroset.AERO.SPR_Dawn_Garden_02_AERO","atw_aeroset.AERO.SPR_Dawn_Garden_01_AERO","ATW_Death_AEROSet.AERO.ATW_Death_Black_AERO","ATW_Death_AEROSet.AERO.ATW_Death_Main_02_AERO","ATW_Death_AEROSet.AERO.ATW_Death_Main_AERO","ATW_Death_AEROSet.AERO.SPR_Dawn_Garden_01_AERO","ax2_aeroset.AERO.AX2_AERO_FINAL","BF_03_AEROSet.AERO.BF_03_Exterrior_RoomBoss_AERO","BF_03_AEROSet.AERO.BF_03_Exterrior_Room02_AERO","BF_03_AEROSet.AERO.BF_03_Exterrior_Room01_AERO","BF_03_AEROSet.AERO.BF_03_Exterrior_AERO","bf_3x3_aeroset.AERO.BF_3x3_Default_Aeroset","bf_3x3_aeroset.AERO.bf_3x3_aeroset","bf_5x5_aeroset.AERO.BF_5x5_Default_Aeroset","bf_aeroset.AeroSet.BF_AeroSet_02","bf_aeroset.AeroSet.BF_AeroSet_01","bf_aeroset.AeroSet.BF_02_AeroSet","BF_FreeFight_OBJ.AERO.FF_Main_AERO","BF_KumasWorld_aeroset.AERO.BF_Kumas_Coast_AERO","BF_KumasWorld_aeroset.AERO.BF_KumasWorld_AERO_01","BF_KumasWorld_aeroset.AERO.JungleCoast_AERO","BF_KumasWorld_R_OBJ.AERO.BF_KumasWorld_R_AERO","BF_PVEBattle_Aeroset.AERO.BF_PVEBattle_Losing_AERO","BF_PVEBattle_Aeroset.AERO.BF_PVEBattle_Normal_AERO","BF_PVEBattle_Aeroset.AERO.BF_PVEBattle_Winning_AERO","BF_RainFire_Aeroset.AERO.BF_RainFire_Out_AERO","BF_RainFire_Aeroset.AERO.BF_RainFire_INT_AERO","BF_RainFire_Aeroset.AERO.BF_RainFire_Field_AERO","BF_RainFire_Aeroset.AERO.BF_RainFire_Basement_Aeroset","BF_snowBattle_aeroset.AERO.BF_snowBattle_02_Aeroset","BF_snowBattle_aeroset.AERO.BF_snowBattle_renew_AERO","AUN_AEROSet.AERO.AUN_Default_AEROSet","AUT_AEROSet.AERO.AUT_Default_AEROSet","AUT_AEROSet.AERO.AUT_02_AEROSet","CNY_AEROSet.AERO.CNY_Default_AERO","DST_AEROSet.AERO.DST_Default_AEROSet","ICC_AEROSet.AERO.ICC_Default_AEROSet","ICE_AEROSet.AERO.ICE_Default_AEROSet","JUG_AEROSet.AERO.JUG_Default_AEROset","SPR_AEROSet.AERO.SPR_Default_AEROSet","TRP_AEROSet.AERO.TRP_Default_AEROSet","VOC_AEROSet.AERO.VOC_Default_AEROSet","WIT_AEROSet.AERO.WIT_Default_AEROSet","WNT_AEROSet.AERO.WIT_Default_AEROSet","agit_aeroset.AeroSet.VK_SD_AeroSet","agit_aeroset.AeroSet.VK_Agit_AeroSet","agit_aeroset.AeroSet.KA_Agit_AeroSet","agit_aeroset.AeroSet.AL_Agit_AeroSet","agit_aeroset.AeroSet.Agit_AeroSet_Default","arg_tes_aero.ARG_TES_B1F_AEROSET","arg_tes_aero.ARG_TES_AEROSET","ARG_TOM_AERO.ARG_TOM_Path_AEROSET","ARG_TOM_AERO.ARG_TOM_Hall_AEROSET","ARG_TOM_AERO.ARG_TOM_Con_Cor_AEROSET","ARG_TOM_AERO.ARG_TOM_B_AEROSET","ARG_TOM_AERO.ARG_TOM_A_AEROSET","ATF_GDT_AERO.General.GDT_Room_AERO","ATF_GDT_AERO.General.GDT_Hall_AERO","ATF_GDT_AERO.General.GDT_AERO","ATF_GDT_ENV.EnvCube.AeroSet_0","cas_enc_aero.CAS_ENC_Sky_Aeroset","cas_enc_aero.CAS_ENC_Basement_Aeroset","cas_enc_aero.CAS_ENC_Aeroset","cas_hac_aero.General.CAS_HAC_Library_AEROSET","cas_hac_aero.General.CAS_HAC_B1F_AEROSET","cas_hac_aero.General.CAS_HAC_AEROSET","cas_hac_split.sm.AeroSet_0","cas_jok_aero.General.CAS_JOK_Path_AEROSET","cas_jok_aero.General.CAS_JOK_Giant_AEROSET","cas_jok_aero.General.CAS_JOK_Dragon_AEROSET","cas_jok_aero.General.CAS_JOK_Clown_AEROSET","cas_jok_aero.General.CAS_JOK_Armadillo_Aeroset","cas_jok_aero.General.CAS_JOK_AEROSET","cas_toc_aero.CAS_TOC_B3F_Aeroset","cas_toc_aero.CAS_TOC_Aeroset","cas_toc_split.sm.AeroSet_0","mix_cic_aero.MIX_CIC_B3F_Aeroset","mix_cic_aero.MIX_CIC_Aeroset","mix_pic_aero.MIX_PIC_Sky_Aeroset","mix_pic_aero.MIX_PIC_path_Aeroset","mix_pic_aero.MIX_PIC_Hall_Sky_Aeroset","mix_pic_aero.MIX_PIC_Aeroset","MIX_PIC_Split.sm.AeroSet_0","New_Module.AERO.New_Module_AERO","nat_blc_aero.NAT_BLC_Aeroset","NAT_DOD_AERO.NAT_DOD_Argon_Aeroset","NAT_DOD_AERO.NAT_DOD_Aeroset","NAT_GDT_AERO.General.NAT_GDT_AEROSet","nat_mia_aero.NAT_MIA_Hall_AEROSET","nat_mia_aero.NAT_MIA_AEROSET","nat_mod_aero.AeroSet.ASW_MOD_Path_AERO","nat_mod_aero.AeroSet.ASW_MOD_AERO","tmp_tod_aero.TMP_TOD_Path_AEROSET","tmp_tod_aero.TMP_TOD_B3F_AEROSET","tmp_tod_aero.TMP_TOD_B2F_AEROSET","tmp_tod_aero.TMP_TOD_AEROSET","EX_Union_AERO.AERO.ASW.EX_ASW_C_CE_AERO","EX_Union_AERO.AERO.HSC.EX_HSC_A_CE_AERO","EX_Union_AERO.AERO.KA.EX_Union_Kaiator_Inner_AERO","EX_Union_AERO.AERO.SSC.EX_SSC_A_CE_AERO","EX_Union_AERO.AERO.Union_Battle_01_AERO","EX_Union_AERO.AERO.Union_Battle_HSC_AERO","EX_Union_AERO.AERO.Union_Battle_SSC_AERO","EX_UnionTC_SD_Obj.AERO.EX_UnionTC_SD_AERO","A_Island_Aeroset.AERO.A_Island_02_AERO","A_Island_Aeroset.AERO.A_Island_AERO","A_Island_Aeroset.AERO.A_Island_Argon_AERO","A_Island_Aeroset.AERO.A_Island_Boss_Aero","A_Island_Aeroset.AERO.A_Island_Cave_AERO","A_Island_Aeroset.AERO.A_Island_SD_AERO","Liar_AERO.AERO.Liar_AERO","Liar_AERO.AERO.Liar_AERO_02","Roundup_Hunting_AERO.AERO.Roundup_Hunting_AERO","EX01_SWC_SD_02.AERO.SWC_SD_02_AEROSET_Total","EX01_SWC_SD_02.AERO.SWC_SD_02_AEROSET_Boss","EX01_SWC_SD_AERO.SWC_SD_Aeroset_01","EX01_SWC_SD_AERO.SWC_SD_Aeroset","EX01_ATW_Start_Aeroset.AERO.EX01_ATW_Start_01_Rain_NoDirec_AERO","EX01_ATW_Start_Aeroset.AERO.EX01_ATW_Start_01_Rain_Battle_AERO","EX01_ATW_Start_Aeroset.AERO.EX01_ATW_Start_01_Rain_AERO","EX01_ATW_Start_Aeroset.AERO.EX01_ATW_Start_01_Rain_A_AERO","EX01_ATW_Start_Aeroset.AERO.EX01_ATW_Start_01_Inner_AERO","EX01_HEN_SD_Aeroset.AERO.HEN_SD_Inner_Aeroset","EX01_HEN_SD_Aeroset.AERO.HEN_SD_Aeroset","EX01_SNC_SD_Aeroset.AeroSet.EX01_SNC_SD_Aeroset","EX01_SNC_SD_Aeroset.AeroSet.EX01_SNC_SD_AERO_04","EX01_SNC_SD_Aeroset.AeroSet.EX01_SNC_SD_AERO_03","EX01_SNC_SD_Aeroset.AeroSet.EX01_SNC_SD_AERO_02","EX01_SWC_SD_Argon.AERO.EX01_SWC_SD_Argon_AEROSET","EX01_SWN_SD.AERO.EX01_SWN_SD_AEROSET","EX01_VK_DailyQuest.AERO.VK_DailyQuest_AERO","EX01_VK_DailyQuest_Aeroset.AERO.VK_DailyQuest_02_AERO","EX01_VK_SD_02.AERO.VK_SD_02_AEROSET","Airship_AEROSet.AERO.Airship_1F_AERO","Airship_AEROSet.AERO.Airship_AERO","Airship_AEROSet.AERO.Airship_Ext_AERO","Airship_AEROSet.AERO.Airship_Int_AERO","Airship_AEROSet.AERO.Airship_Quest_AERO","Airship_AEROSet.AERO.Airship_Quest_Ext_AERO","Airship_AEROSet.VK_AERO_Station","AbandonedLaboratory_OBJ.AERO.AbaLab_01_AERO","AbandonedLaboratory_OBJ.AERO.AbaLab_02_AERO","AbandonedLaboratory_OBJ.AERO.AbaLab_03_AERO","AbandonedLaboratory_OBJ.AERO.AbaLab_04_AERO","AbandonedLaboratory_OBJ.AERO.AbaLab_05_AERO","AbandonedLaboratory_OBJ.AERO.AbaLab_06_AERO","EX01_ArcDeva_Armory.AeroSet.EX01_ArcDeva_Armory_SD_01_Aeroset","EX01_Durion_Room_AERO.AERO.EX01_Durion_Room_AERO","Lakan_Altor_Obj.AERO.Lakan_Altor_AERO","Lakan_Altor_Obj.AERO.Lakan_Altor_Boss_AERO","Lakan_Altor_Obj.AERO.Lakan_Altor_Cave_AERO","Lakan_Twisted_Altar_OBJ.AERO.Lakan_Twisted_Altar_AERO","Lakan_Twisted_Altar_OBJ.AERO.Lakan_Twisted_Altar_B_AERO","Lakan_Twisted_Altar_OBJ.AERO.Lakan_Twisted_Altar_Start_AERO","BurningCave_OBJ.AERO.BurningCave_AERO","BurningCave_OBJ.AERO.BurningCave_In_AERO","Caliban_AEROSet.AERO.Caliban_Cabin_01_AERO","Caliban_AEROSet.AERO.Caliban_Ext_AERO","Caliban_AEROSet.AERO.Caliban_Ext_Boss_AERO","Caliban_AEROSet.AERO.Caliban_Ext_Rain_AERO","DarkCave_OBJ.AERO.RNW_DarkCave02_AERO","DarkCave_OBJ.AERO.RNW_DarkCave_AERO","Durion_Aero.AERO.Durion_01Named_AERO","Durion_Aero.AERO.Durion_Base_AERO","Durion_Aero.AERO.Durion_Giant_AERO","EX01_Experiment_OBJ.AERO.RNC_Experiment_Aero","EX01_Griffon_AERO.EX01_Griffon_AEROSET","EX01_Griffon_AERO.EX01_Griffon_Room_AEROSET","HugeDragon_Assets.AERO.HD_Phase_04_AERO","HugeDragon_Assets.AERO.HugeDragon_01_AERO","HugeDragon_Assets.AERO.HugeDragon_01a_AERO","HugeDragon_Assets.AERO.HugeDragon_01b_AERO","HugeDragon_Assets.AERO.HugeDragon_LF_01_AERO","HugeDragon_Assets.AERO.HugeDragon_Start_AERO","Laknan_BD_03.AERO.Laknan_Memory_Arms_Aero","Lilith_Castle_AERO.AERO.Lilith_Castle_AERO","Lilith_Castle_AERO.AERO.Lilith_Castle_AERO_02","Lilith_Castle_AERO.AERO.Lilith_Castle_Day_AERO","Lilith_Castle_AERO.AERO.Lilith_Castle_Demolition3NM_AERO","Lilith_Castle_AERO.AERO.Lilith_Castle_Hall_AERO","Lilith_Castle_AERO.AERO.Lilith_Castle_Hall_AERO_02","Lilith_DarkTown_OBJ.AERO.LDT_01_AERO","Lilith_DarkTown_OBJ.AERO.LDT_02_AERO","Lilith_DarkTown_OBJ.AERO.LDT_03_AERO","Lilith_DarkTown_OBJ.AERO.LDT_Boss_AERO","Lilith_DarkTown_OBJ.AERO.LDT_Hidden_AERO","Lilith_DarkTown_OBJ.AERO.LDT_SD_20A_Aeroset3","Nightmare_Aero.AERO.Nightmare_1N_AeroSet","Nightmare_Aero.AERO.Nightmare_2N_AeroSet","Nightmare_Aero.AERO.Nightmare_Main_AeroSet","EX01_Parallel.AERO.Parallel_01_Aero","EX01_Parallel.AERO.Parallel_02_Aero","EX01_Parallel.AERO.Parallel_Aero","EX01_Parallel.AERO.Parallel_Start_Aero","EX01_Parallel_Planet.AERO.Parallel_Planet_2Named_Aero","EX01_Parallel_Planet.AERO.Parallel_Planet_Aero","TimeAttack_AERO.AERO.TimeAttack_AERO","TimeAttack_AERO.AERO.TimeAttack_02_AERO","UnderWater_aero.AERO.UnderWater_1stNamed_aero","UnderWater_aero.AERO.UnderWater_2ndNamed_aero","UnderWater_aero.AERO.UnderWater_3thNamed_aero","UnderWater_aero.AERO.UnderWater_aero_minimap","UnderWater_aero.AERO.UnderWater_Hall_aero","UnderWater_aero.AERO.UnderWater_OrcaZone_aero","UnderWater_aero.AERO.UnderWater_Path_aero","UnderWater_aero.AERO.UnderWater_Road_aero","Velik_Palace_OBJ.AERO.Velik_Palace_1Boss_Aero","Velik_Palace_OBJ.AERO.Velik_Palace_2Boss_Aero","Velik_Palace_OBJ.AERO.Velik_Palace_3Boss_Aero","Velik_Palace_OBJ.AERO.Velik_Palace_Aero","Basement_AERO.AERO.Basement_Cave_Aeroset","Basement_AERO.AERO.Basement_Inside_AERO","Basement_AERO.AERO.Basement_Outside_AERO","hb1_aeroset.AERO.TRP_HB1_Aero","hec_aeroset.AERO.TRP_Wild_Valley_Cave_Aero","hec_aeroset.AERO.TRP_Wild_Valley_Aero","hec_aeroset.AERO.TRP_Quaeantine_Zone_val_Aero","hec_aeroset.AERO.TRP_Quaeantine_Zone_Aero","hec_aeroset.AERO.TRP_Quaeantine_Zone_02a_Aero","hec_aeroset.AERO.TRP_Quaeantine_Zone_02_OLD_Aero","hec_aeroset.AERO.TRP_Quaeantine_Zone_02_Aero","hec_aeroset.AERO.TRP_MIA_Outdoor_Aero","hec_aeroset.AERO.TRP_Dagon_Rain_b_Aero","hec_aeroset.AERO.TRP_Dagon_Rain_Aero","hec_aeroset.AERO.TRP_Dagon_OLD_Aero","hec_aeroset.AERO.TRP_Dagon_Aero","HEN_AEROSet.AERO.HEN_Forest_Dark_Aero","HEN_AEROSet.AERO.HEN_Forest_Left_Aero","HEN_AEROSet.AERO.HEN_Forest_Right_Aero","HEN_AEROSet.AERO.HEN_Lake_Aero","HEN_AEROSet.AERO.HEN_MonumentGarden_Aero","HEN_AEROSet.AERO.HEN_WhiteSilenceForest_Aero","HES_AEROSet.AERO.TRP_HES_Aero","hnc_aeroset.AERO.SPR_Life_Forest_bright_c_AERO","hnc_aeroset.AERO.SPR_Life_Forest_bright_b_AERO","hnc_aeroset.AERO.SPR_Life_Forest_bright_AERO","hnc_aeroset.AERO.SPR_Life_Forest_AERO","hnc_aeroset.AERO.SPR_Life_Forest_02_AERO","hnc_aeroset.AERO.SPR_Esenia_03_AERO","hnc_aeroset.AERO.SPR_Esenia_02_b_AERO","hnc_aeroset.AERO.SPR_Esenia_02_AERO","hnc_aeroset.AERO.SPR_Ancient_Forst_b_AERO","hnc_aeroset.AERO.SPR_Ancient_Forst_03_AERO","hnc_aeroset.AERO.JUG_Polluted_Forst_AERO","hnc_aeroset.AERO.JUG_Polluted_Forst_03b_AERO","hnc_aeroset.AERO.JUG_Polluted_Forst_03_d_AERO","hnc_aeroset.AERO.JUG_Polluted_Forst_03_c_AERO","hnc_aeroset.AERO.JUG_Polluted_Forst_03_b_AERO","hnc_aeroset.AERO.JUG_Polluted_Forst_03_AERO","hnc_aeroset.AERO.JUG_Polluted_Forst_02_AERO","hnc_aeroset.AERO.Ancient_Forst_03_AERO","hnc_aeroset.AERO.Ancient_Forst_02_AERO","hnc_aeroset.AERO.Ancient_Forst_01_AERO","hne_aeroset.AERO.HNE_Divine_Battle_AERO","hne_aeroset.AERO.HNE_AncientWar_Ruin_AERO","hsc_aeroset.AERO.HSC_B_ArkusNest_AERO","hsc_aeroset.AERO.DST_Of_Fantasy_AERO","hsc_aeroset.AERO.DST_AncientWar_Ruin_renew_AERO","hsc_aeroset.AERO.DST_AncientWar_Ruin_b_renew_AERO","hsc_aeroset.AERO.DST_AncientWar_Ruin_b_AERO","hsc_aeroset.AERO.DST_AncientWar_Ruin_AERO","hsc_aeroset.AERO.Cursed_Cave_AERO","hsc_aeroset.AERO.CNY_Plunder_Wasteland_renew_AERO","hsc_aeroset.AERO.CNY_Plunder_Wasteland_AERO","hsc_aeroset.AERO.CNY_Exile_tower_renew_AERO","hsc_aeroset.AERO.CNY_Exile_tower_AERO","hsc_aeroset.AERO.CNY_Exile_tower_02_renew_AERO","hsc_aeroset.AERO.CNY_Exile_tower_02_AERO","hsc_aeroset.AERO.BoneCanyon_AERO","hsc_aeroset.AERO.AncientWar_Ruin_Bright_AERO","HWC_AEROSet.AERO.HWC_B_ICE_Plain_OLD_AERO","HWC_AEROSet.AERO.HWC_B_ICE_Plain_OLD_b_AERO","HWC_AEROSet.AERO.HWC_B_ICE_Plain_OLD_b_noSnow_AERO","HWC_AEROSet.AERO.HWC_C_FloatingCastle_Inner_AERO","HWC_AEROSet.AERO.ICC_Storm_Coast_AERO","HWC_AEROSet.AERO.ICC_Storm_Coast_b_AERO","HWC_AEROSet.AERO.ICC_Storm_Coast_c_AERO","HWC_AEROSet.AERO.ICC_Storm_Coast_d_AERO","HWC_AEROSet.AERO.ICC_Storm_Coast_OLD_AERO","HWC_AEROSet.AERO.ICE_ICE_Plain2_AERO","HWC_AEROSet.AERO.ICE_ICE_Plain2_renew_AERO","HWC_AEROSet.AERO.ICE_ICE_Plain2_wendigo_AERO","HWC_AEROSet.AERO.ICE_ICE_Plain_AERO","HWC_AEROSet.AERO.ICE_ICE_Plain_b_AERO","HWC_AEROSet.AERO.ICE_Plain_Under_Attack_AERO","HWC_C_DarkRift_AeroSet.AERO.HWC_C_DarkRift01_AERO","HWC_C_DarkRift_AeroSet.AERO.HWC_C_DarkRift02_AERO","HWC_C_DarkRift_AeroSet.AERO.HWC_C_DarkRift03_AERO","KA_AEROSet.AERO.ICC_Kaiator_noClimateSystem_AERO","KA_AEROSet.AERO.ICC_Kaiator_Inner_AERO","KA_AEROSet.AERO.ICC_Kaiator_Inner_03_AERO","KA_AEROSet.AERO.ICC_Kaiator_Inner_02_AERO","KA_AEROSet.AERO.ICC_Kaiator_AERO","lobby_ch_select_aero.AERO.Lobby_CH_Select_AERO_Night_03","lobby_ch_select_aero.AERO.Lobby_CH_Select_AERO_Night_02","lobby_ch_select_aero.AERO.Lobby_CH_Select_AERO_Night","lobby_ch_select_aero.AERO.Lobby_CH_Select_AERO03","lobby_ch_select_aero.AERO.Lobby_CH_Select_AERO02","lobby_ch_select_aero.AERO.lobby_ch_select_aero","Lobby_Fog_OBJ.AERO.Lobby_Fog_AERO","lobby_raceselect_aero.AeroSet.Lobby_Race_Popori_Aero","lobby_raceselect_aero.AeroSet.Lobby_Race_Human_Aero","lobby_raceselect_aero.AeroSet.Lobby_Race_HighElf_Aero","lobby_raceselect_aero.AeroSet.Lobby_Race_Default_Aero","lobby_raceselect_aero.AeroSet.Lobby_Race_Castanic_Aero","lobby_raceselect_aero.AeroSet.Lobby_Race_Baraka_Aero","lobby_raceselect_aero.AeroSet.Lobby_Race_Aman_Aero","lobby_raceselect_aero.AeroSet.Lobby_Customizing_Aero","RNC_aeroset.AERO.RNC_Indoor_AERO","RNC_aeroset.AERO.RNC_Inside_AERO","RNC_aeroset.AERO.RNC_Outside_AERO","RNC_aeroset.AERO.RNC_Snow_AERO","RNW_5856_add.AERO.RNW_B_Field_5856_AERO","RNW_5856_add.AERO.RNW_mamul_Field_01_AERO","RNW_aeroset.AERO.RNW_B_AERO","RNW_aeroset.AERO.RNW_Field_02_AERO","RNW_aeroset.AERO.RNW_Field_03_AERO","RNW_aeroset.AERO.RNW_Field_03a_AERO","RNW_aeroset.AERO.RNW_Field_04_A_AERO","RNW_aeroset.AERO.RNW_Field_04_AERO","RNW_aeroset.AERO.RNW_Field_04_B_AERO","RNW_aeroset.AERO.RNW_Field_05_AERO","RNW_aeroset.AERO.RNW_Field_06_AERO","RNW_aeroset.AERO.RNW_Field_AERO","RNW_aeroset.AERO.RNW_Field_backup_AERO","RNW_aeroset.AERO.RNW_Field_Baraka_01_AERO","RNW_aeroset.AERO.RNW_Field_Baraka_AERO","RNW_aeroset.AERO.RNW_Field_Baraka_Inner02_AERO","RNW_aeroset.AERO.RNW_Field_Baraka_Inner_AERO","RNW_aeroset.AERO.RNW_Field_original_AERO","RNW_aeroset.AERO.RNW_mamul_Field_01_AERO","RNW_aeroset.AERO.RNW_mamul_Field_AERO","RNW_aeroset.AERO.RNW_test_Aero","RNW_aeroset.AERO.RNWRNC_AERO","RNW_Aeroset_Various.AERO.Bright_aero","RNW_Aeroset_Various.AERO.Dark_AERO","RNW_Aeroset_Various.AERO.DenseFog_AERO","RNW_Aeroset_Various.AERO.Night02_AERO","RNW_Aeroset_Various.AERO.Rain_AERO","RNW_Aeroset_Various.AERO.Snow_AERO","RNW_Aeroset_Various.AERO.Sunset_AERO","RNW_Resist_Camp_AERO.RNW_Resist_Camp_AERO","RWS_aeroset.AERO.Base_02_AERO","RWS_aeroset.AERO.JUG_Forst_03_c_AERO","RWS_aeroset.AERO.JUG_Forst_03_ca_AERO","RWS_aeroset.AERO.Rain_02_AERO","RWS_aeroset.AERO.RWS_Valley_Aero","RWS_aeroset.AERO.RWS_Wild_CAVE_Renew","RWS_aeroset.AERO.RWS_Wild_Valley02_Renew","RWS_aeroset.AERO.RWS_Wild_Valley02a_Renew","RWS_aeroset.AERO.RWS_Wild_Valley_01_Renew","RWS_aeroset.AERO.RWS_Wild_Valley_02_Renew","RWS_aeroset.AERO.RWS_Wild_Valley_03_Renew","RWS_aeroset.AERO.RWS_Wild_Valley_Aero","RWS_aeroset.AERO.RWS_Wild_Valley_Renew","RWS_aeroset.AERO.RWS_Wild_Valley_Renew02","RWS_aeroset.AERO.Serpent_Island_B_AERO_FINAL","sec_aeroset.AERO.SEC_furnace_Field_AERO","sec_aeroset.AERO.JailOfKilion_AERO","sec_aeroset.AERO.ICC_SEC_BD02_renew_AERO","sec_aeroset.AERO.ICC_SEC_BD02_AERO","sec_aeroset.AERO.ICC_SEC_BD01_AERO","sec_aeroset.AERO.ICC_Frozen_Field_IceCave_AERO","sec_aeroset.AERO.ICC_Frozen_Field_AERO","sec_aeroset.AERO.ICC_Cursed_BattleG_c_AERO","sec_aeroset.AERO.ICC_Cursed_BattleG_b_AERO","sec_aeroset.AERO.ICC_Cursed_BattleG_AERO","snc_aeroset.AERO.SNC_A_Argonn_Supply_AERO","snc_aeroset.AERO.ARG_Northern_Argonn_Test_AERO","snc_aeroset.AERO.ARG_Northern_Argonn_Casian_AERO","snc_aeroset.AERO.ARG_Northern_Argonn_AERO","snc_aeroset.AERO.ARG_Northern_Argonn_02_AERO","snc_aeroset.AERO.ARG_Northern_Argonn_01_AERO","snc_aeroset.AERO.ARG_InvadingArmy_Base_AERO","snc_aeroset.AERO.ARG_InvadingArmy_02_AERO","snc_aeroset.AERO.ARG_Argonite_Town_AERO","SNC_BLC_AEROSet.AERO.SWC_TES_AERO","SSC_AEROSet.AERO.AUN_Darkness_Forest01_AERO","SSC_AEROSet.AERO.AUN_Darkness_Forest02_AERO","SSC_AEROSet.AERO.AUN_Darkness_Forest_AERO","SSC_AEROSet.AERO.AUN_Darkness_Forest_b_AERO","SSC_AEROSet.AERO.AUN_Darkness_Forest_b_Failure_AERO","SSC_AEROSet.AERO.AUN_Darkness_Forest_c_AERO","SSC_AEROSet.AERO.AUN_Shadow_Forest01_AERO","SSC_AEROSet.AERO.AUN_Shadow_Forest02_AERO","SSC_AEROSet.AERO.AUN_Shadow_Forest_AERO","SSC_AEROSet.AERO.AUN_Shadow_Forest_b_AERO","SSC_AEROSet.AERO.DarknessForest_01_AERO","SSC_AEROSet.AERO.DarknessForest_01_renew_AERO","SSC_AEROSet.AERO.ICE_Fairies_Forest_AERO","SSC_AEROSet.AERO.IsrensWand_AERO","SSC_AEROSet.AERO.SSC_TRP_Default_AEROSet","SSC_AEROSet.AERO.SSC_TRP_Default_OLD_AEROSet","SSC_AEROSet.AERO.SSC_Wedding_AERO","SSC_AEROSet.AERO.SX3_AERO","SSC_AEROSet.AERO.WIT_AmenaQuatla_01_AERO","SSC_AEROSet.AERO.WIT_AmenaQuatla_AERO","SSC_AEROSet.AERO.WIT_AmenaQuatla_b_AERO","SSC_AEROSet.AERO.WIT_AmenaQuatla_c_AERO","SSC_AEROSet.AERO.WIT_AmenaQuatla_Cave_AERO","SSC_AEROSet.AERO.WIT_AmenaQuatla_GC_AERO","SSC_AEROSet.AERO.WIT_AmenaQuatla_OLD_AERO","aen_a_sd_03.AERO.AEN_A_SD_DarkWing","aen_a_sd_aero.AEN_A_SD_Aeroset_Main","aen_a_sd_aero.AEN_A_SD_Aeroset_Cor","aen_a_sd_aero.AEN_A_SD_AERO_Darkwing","AEN_C_SD_01_AERO.AEN_C_SD_01_AERO","AEN_C_SD_AERO.AEN_C_SD_AERO","AL_A_Quest_01.AeroSet.AL_A_Quest_AeroSet","anc_a_sd_aero.ANC_A_SD_Out_Aeroset","anc_a_sd_aero.ANC_A_SD_Aeroset","anc_a_sd_aero.ANC_A_SD_01_Aeroset","AncientForest_AEROSet.AERO.AncientForest01_Aero","AncientForest_AEROSet.AERO.AncientForest02_Aero","AncientForest_AEROSet.AERO.AncientForest03_Aero","AncientForest_AEROSet.AERO.AncientForest_Boss_Aero","AncientForest_AEROSet.AERO.AncientForest_Start01_Aero","ase_a_sd_aero.ASE_A_SD_TombHall_Aeroset","ase_a_sd_aero.ASE_A_SD_Hall_Aeroset","ase_a_sd_aero.ASE_A_SD_B1FBossRooml_Aeroset","ase_a_sd_aero.ASE_A_SD_Aeroset","ASW_A_Quest_01.AeroSet.ASW_A_Quest_AEROset","ASW_A_Quest_01.AeroSet.ASW_A_Quest_02_AEROset","ASW_A_SD_Aero.ASW_A_SD_Argon_Aeroset","ASW_A_SD_Aero.ASW_A_SD_Aeroset","atw_a_sd_aero.ATW_A_SD_Aeroset","CAS_JOK_SD_02_AERO.General.CAS_JOK_SD_02_Path","CAS_JOK_SD_02_AERO.General.CAS_JOK_SD_02_AEROSET","EX_AEN_ArcDevaTemple_SD_Aeroset.EX_AEN_ArcDevaTemple_SD_Aero","EX_AEN_ArcDevaTemple_SD_Aeroset.EX_AEN_ArcDevaTemple_SD_Boss_Aero","EX_AL_SD2_T41_AeroSet.AERO.EX_AL_SD2_T41_AERO_FINAL","EX_ASW_aeroset.AERO.EX_ASW_Giants_LostCity_AERO","EX_ASW_C_SD_Aero.EX_ASW_C_SD_Aeroset","EX_Dice_AeroSet.AERO.EX_Dice_AeroSet","EX_Halloween_T42_AEROSet.AERO.EX_Halloween_Inside_Aeroset","EX_Halloween_T42_AEROSet.AERO.EX01_CAS_ENC_Sky_Aeroset","EX_HEC_aeroset.AERO.EX_HEC_Yuanti_Aero","EX_HEC_aeroset.AERO.EX_HEC_Golem01_Aero","EX_HEC_aeroset.AERO.EX_HEC_Argon02_AERO","EX_HEC_aeroset.AERO.EX_HEC_Animal_aero","EX_HNC_aeroset.AERO.EX_HNC_Life_Forest_bright_c_AERO","EX_HNC_aeroset.AERO.EX_HNC_Life_Forest_bright_b_AERO","EX_HNC_aeroset.AERO.EX_HNC_Life_Forest_bright_AERO","EX_HWC_aeroset.AERO.EX_HWC_Plain_OLD_b_AERO","EX_HWC_aeroset.AERO.EX_HWC_ICE_Plain_OLD_AERO","EX_HWC_aeroset.AERO.EX_HWC_B_SD_AERO","EX_RNC_Laboratory_Aeroset.EX_RNC_Laboratory__Boss_Aeroset","EX_RNC_Laboratory_Aeroset.EX_RNC_Laboratory_Aeroset","EX_RNC_Laboratory_Aeroset.EX_RNC_Laboratory_aeroset_hall","EX_RNW_Arcana_Aero.AERO.01_AEROSET","EX_SSC_aeroset.AERO.EX_SSC_Shadow_Forest_AERO","EX_SSC_aeroset.AERO.EX_SSC_Fairies_Forest_AERO","EX_SWN_DL_01_T41_AEROSet.EX_SWN_DL_01_T41_AERO","EX_VK_SD1_T42_Aeroset.AERO.Alice_Base_02_AERO","EX_VK_SD1_T42_Aeroset.AERO.Alice_Base_AERO","EX_VK_SD1_T42_Aeroset.AERO.Alice_Boss_AERO","EX_VK_SD1_T42_Aeroset.AERO.EX_VK_SD1_T42_Basement_Aeroset","EX_VK_SD1_T42_Aeroset.AERO.EX_VK_SD1_T42_IN01_Aeroset","EX_VK_SD1_T42_Aeroset.AERO.EX_VK_SD1_T42_IN02_Aeroset","EX_VK_SD1_T42_Aeroset.AERO.EX_VK_SD1_T42_IN03_Aeroset","EX02_VampirPalace_SD_Aero.Vampir_SD_Hall_Aeroset","EX02_VampirPalace_SD_Aero.VampirPalace_SD_Aeroset","Ghillian_AERO.AERO.night_Forst_02_AERO","Ghillian_AERO.AERO.night_Forst_02_dark_AERO","Ghillian_AERO.AERO.night_Forst_03_AERO","HNE_SD_AEROSet.AERO.HNE_SD_AERO","HSC_A_Quest_Aero.HSC_A_Quest_Aeroset_Main","HSC_A_SD_P_AERO.HSC_A_SD_Tulsa_AEROSET","HSC_A_SD_P_AERO.HSC_A_SD_P_AEROSET","HSC_A_SD_P_AERO.HSC_A_SD_Golem_AEROSET","HSC_B_Quest_Aero.AeroSet.HSC_B_Quest_AEROset","HSC_DOD_SD_AERO.AERO.HSC_DOD_SD_AERO","HWC_B_SD_AERO.HWC_B_SD_AEROSET","hwc_b_sd_p_aero.HWC_B_SD_P_AEROSET","hwc_b_sd_p_aero.HWC_B_SD_P_04_AEROSET","hwc_b_sd_p_aero.HWC_B_SD_P_03_AEROSET","hwc_b_sd_p_aero.HWC_B_SD_P_02_AEROSET","hwc_b_sd_p_aero.HWC_B_SD_P_01_AEROSET","IllusionTower_Aero.IllusionTower_01_Aeroset","Kamai_aeroset.AERO.Kamai_Swamp_AERO01_FINAL","Kamai_aeroset.AERO.Kamai_Swamp_AERO02_FINAL","Kamai_aeroset.AERO.Kamai_Swamp_AERO_FINAL","Laknan_Aeroset.AERO.Laknan_1F_Boss_02_AERO","Laknan_Aeroset.AERO.Laknan_1F_Boss_AERO","Laknan_Aeroset.AERO.Laknan_1F_FINAL_AERO","Laknan_Aeroset.AERO.Laknan_AERO","Laknan_Aeroset.AERO.Laknan_B1F_AERO","Laknan_Aeroset.AERO.Laknan_PlayRoom_AERO","Pirateship_aeroset.AERO.Pirateship_AERO_boss","Pirateship_aeroset.AERO.Pirateship_AERO_cliff","Pirateship_aeroset.AERO.PirateShip_AERO_renew_FINAL","SEC_Forge_AERO.AeroSet.SEC_Forge_AEROset","SEC_Quest_Aero.SEC_Quest_Aero","SSC_A_Quest_AERO.AERO.SSC_A_Quest_IN_AERO","SSC_A_Quest_AERO.AERO.SSC_A_Quest_AERO","SWC_Quest_AERO.SWC_Quest_Aeroset","SWC_Quest_AERO.Quest_process_C_Aero","SWC_Quest_AERO.Quest_process_B_Aero","SWC_Quest_AERO.Quest_process_A_Aero","SWC_SD_AERO.AERO.SWC_SD_L_Aeroset","SWC_SD_AERO.AERO.SWC_SD_Clear_Aeroset","SWC_SD_AERO.AERO.SWC_SD_Aeroset3","SWC_SD_AERO.AERO.SWC_SD_Aeroset2","SWC_SD_AERO.AERO.SWC_SD_Aeroset1","SWC_SD_AERO.AERO.SWC_SD_Aeroset","SWC_SD_AERO.AERO.SWC_SD_20B_Aeroset3","SWC_SD_AERO.AERO.SWC_SD_20B_Aeroset2","SWC_SD_AERO.AERO.SWC_SD_20B_Aeroset","SWC_SD_AERO.AERO.SWC_SD_20A_Aeroset3","SWC_SD_AERO.AERO.SWC_SD_20A_Aeroset2","SWC_SD_AERO.AERO.SWC_SD_20A_Aeroset","SWC_SD_AERO.AERO.SWC_SD_02_Aeroset","SWC_SD_AERO.AERO.SWC_Quest_S_Aeroset","SWC_SD_AERO.AERO.SWC_Quest_Aeroset","SWC_SD_AERO.AERO.SWC_Quest_03_AeroSet","SWC_SD_AERO.AERO.SWC_Quest_03_AERO","SWC_SD_AERO.AERO.SWC_Quest_02_AERO","VK_Sewer_AERO.AERO.VK_Sewer_Boss_AERO","VK_Sewer_AERO.AERO.VK_Sewer_Main_AERO","VK_Sewer_AERO.AERO.VK_Sewer_Start_AERO","SWC_AEROSet.AERO.WIT_AmenaQuatla_AERO","SWC_AEROSet.AERO.SWC_TirkaiWood_AERO","SWC_AEROSet.AERO.SWC_TirkaiWood_02_AERO","SWC_AEROSet.AERO.SWC_TES_AERO","SWC_AEROSet.AERO.SWC_KaWay_AERO","SWC_AEROSet.AERO.SWC_FortOfPuppet_b_T4","SWC_AEROSet.AERO.SWC_FortOfPuppet_b_AERO","SWC_AEROSet.AERO.SWC_FortOfPuppet_AERO","SWC_AEROSet.AERO.SWC_BaseOfEnv_AERO","swn_aeroset.AERO.ARG_SWN_noClimateSystem_AERO","swn_aeroset.AERO.ARG_SWN_AERO","VK_Aeroset.AX2_AERO","VK_Aeroset.VK_AERO","VK_Aeroset.VK_AERO2","VK_Aeroset.VK_AERO2_New","VK_Aeroset.VK_AERO_AcademyMagic","VK_Aeroset.VK_AERO_AcademyWarrior","VK_Aeroset.VK_AERO_Alchemy","VK_Aeroset.VK_AERO_CommandCenter","VK_Aeroset.VK_AERO_Factory","VK_Aeroset.VK_AERO_FINAL","VK_Aeroset.VK_AERO_Forge","VK_Aeroset.VK_AERO_Inner","VK_Aeroset.VK_AERO_Inner_GeneralBuilding","VK_Aeroset.VK_AERO_Sewing","VK_Aeroset.VK_FA_AERO","VK_Aeroset.VK_SkyCastle00_AERO","Acc_127.AeroSet_1","Acc_202.Skel.AeroSet_0","Acc_378.AeroSet_6","cut_atw_direct_aero.AERO.ATW_Direct_AeroSet","cut_Cinematic_MAT_A.AERO.SWC_SD_02_AEROSET_Boss","cut_scene_aeroset.VK_AERO_Velic","cut_scene_aeroset.Cut_BlackDream_Aero","Castanic_F_talentia.Castanic_F_talentia","Human_F_elviennue.AeroSet_0","Killian_Kid.AeroSet_0","Bones_Heap01.Bones_Heap01","Popori_M_Pobarian.AeroSet_1","BG_FX_B.SkySystem.AERO.Aero_Snow_outer","BG_FX_B.SkySystem.AERO.Aero_Snow02_outer","BG_FX_B.SkySystem.AERO.Aero_Rain_outer","BG_FX_C.SkySystem.AERO.Aero_Rain_outer","BG_FX_D.PS.1111","ClimateSystems.AERO.Aero_Snow_outer","ClimateSystems.AERO.Aero_Snow_inner","ClimateSystems.AERO.Aero_Rain_outer","ClimateSystems.aa","envCaseEffect.onGround.testaero","FX_J_Hotfix_130830.AERO.CrackOfSpacetime_AERO","AA_AEROSet.Special.BlackCrack_03_AERO","AA_AEROSet.Special.BlackCrack_02_AERO","AA_AEROSet.Special.BlackCrack_01_AERO","AA_AEROSet.General.Test_Red_AERO","AA_AEROSet.General.Test_Green_DOF_AERO","AA_AEROSet.General.S1_Default_AERO","AA_AEROSet.General.Proto_Lighting_0000_AERO","AA_AEROSet.General.HighLand_Day0000_AERO","AA_AEROSet.AERO.Effect_Default_AERO","S1_Technique.OnePassFog.Fog_AERO","S1_Technique.OnePassFog.NoneFog_AERO","SkySystem30.AERO.AEN_Castanica_AERO","SkySystem30.AERO.AEN_DefaultSky_AERO","SkySystem30.AERO.AL_DefaultSky_AERO","SkySystem30.AERO.AL_DefaultSky_AERO2","SkySystem30.AERO.ANC_DefaultSky_AERO","SkySystem30.AERO.Clear","SkySystem30.AERO.HSC_DefaultSky_AERO","SkySystem30.AERO.Neutral_AERO","SkySystem30.AERO.Transport00_AERO","SkySystem30.AERO.Zero_AERO","SkySystem30_add.AERO.ASW_DefaultSky_AERO","SkySystem30_add.AERO.Default_FullShereSky_AERO","SkySystem30_add.AERO.DefaultSky_AERO","SkySystem30_B.AERO.Astral_02_AEROSet","SkySystem30_B.AERO.Common_03_AEROSet","SkySystem30_B.AERO.Common_05_AEROSet","SkySystem30_B.AERO.Common_06_AEROSet","SkySystem30_B.AERO.Common_08_AEROSet","SkySystem30_B.AERO.Common_Default_AEROSet","SkySystem30_B.AERO.FullSphere00_test_AEROSet","SkySystem30_B.AERO.HWC_A_test_AEROSet","SkySystem30_B.AERO.HWC_C_test_AEROSet","SkySystem30_B.AERO.SSC_A_test_AEROSet","SkySystem30_B.AERO.SSC_B_02_test_AEROSet","Zero_AERO.AERO.Zero_AERO","Durion_theLast.AbandoneLaboratory_Durion.AeroSet_0","Monster_Voice21.Vehicle_Pig.Vehicle_Pig_Run_01","NPC_Action.AeroSet_0"]
var aura = [0,1440,2105,2561,2680,2725,4611,4866,15070,15080,46759,60006,60020,70406,70408,100801,101900,200200,401300,401400,468008,476617,477026,500100,600500,701700,780103,780203,905425,905803,905906,905947,950038,950050,950326,950327,950328,950329,5010000,7692000,7692002,8000737,9810012,10151032,10151070,10154030,47500400,47651003,47661900,47681800,47702500,80900005,81010202,81110401,81112001,999001024,999009720,999009730,999009810]
var shield = [0,15090,60005,70462,781009,801000,5692001,10152110,10153091,81121000,88825253,99006800,999009790,999009820]
var hand = [0,921,4767,60001,300300,400100,601100,700300,700600,757053,3000020,98000101,99006300]
var ground = [0,2050,2060,2070,2051,2061,2071,2099,15030,88614,460015,460032,808106,905605,980104,47680600,99070007,99070008,99070027]
var etc = [46750,46751,88605,429015,457002,460004,476611,476612,476613,476614,781018,905698,905953,950095,981129,4510004,4510005,4510006,4510007,4510008,4510009,4510010,4510011,4510012,4510013,4510014,7101013,7101018,7103018,7103024,7103025,7103026,7103027,7103028,7103028,7103029,7103030,7103031,10151072,44300024,44300025,44300026,44300027]

	let cid,
		name,
		x,
		y,
		z,
		zone,
		serv,
		player,
		pc,
		pcapp,
		target,
		ucid = 33333333333333, //These are like this to prevent conflicts and camera issues
		objcid = 33333333333333,
		npccid = 33333333333333,
		colcid = 33333333333333,
		petcid = 33333333333333,
		shutid = 33333333333333,
		fireid = 33333333333333,
		pserver,
		pid,
		fab = [],
		w
//HOOKS	
	dispatch.hook('S_LOGIN', 1, (event) => {
    name = event.name;
  });
  dispatch.hook('S_SPAWN_NPC', 1, {filter: {fake: null}}, event =>{
		snpcw = event.w
		snpcx = event.x
		snpcy = event.y
		snpcz = event.z
		});
  dispatch.hook('S_ABNORMALITY_BEGIN', 1, {filter: {fake: null}}, event =>{
		if (event.source == 69696969){
		fab.push(event.id)}
  })
  dispatch.hook('S_LOGIN', 2, (event) => {
	  pcid = event.cid
	  pserver = event.serverId
	  pid = event.playerId
	  })
	dispatch.hook('C_PLAYER_LOCATION', 1, event =>{
		location = event
		w = event.w
		x = event.x1
		y = event.y1
		z = event.z1	
	});
	dispatch.hook('S_LOAD_TOPO', 1, event =>{
		zz = event.zone
	});
	dispatch.hook('S_SPAWN_USER', 5, event =>{
		//console.log('User Found '+event.name, event.appface, event.apphair)
		pc = event
	})
//COMMANDS
	command.add('aes', (type, effect, arg3) => {
	if (type == 'sky') {
		dispatch.toClient('S_AERO', 1, {
		enabled: 1,
		blendTime: 0,
		aeroSet: aero[effect]
				})
			}
	if (type == 'clear') {
		dispatch.toClient('S_START_ACTION_SCRIPT', 1, {
		cid: pcid,
		unk1: 105,
		unk2: 0
		})
		clearaura()
		for(var i = fab.length -1; i >= 0 ; i--){
		fab.splice(i, 1);
			}
			}
	
	if (type == 'aura') {
		dispatch.toClient('S_ABNORMALITY_BEGIN', 2, {
	target: pcid,
	source: 69696969,
	id: aura[effect],
	duration: 0,
	unk: 0,
	stacks: 1,
	unk2: 0
		})
		if (arg3 == 'rm') {
			dispatch.toClient('S_ABNORMALITY_END', 1, {
			target: pcid,
			id: aura[effect]
		})
		}
		}
	if (type == 'shield') {
		dispatch.toClient('S_ABNORMALITY_BEGIN', 2, {
	target: pcid,
	source: 69696969,
	id: shield[effect],
	duration: 0,
	unk: 0,
	stacks: 1,
	unk2: 0
		})
		if (arg3 == 'rm') {
			dispatch.toClient('S_ABNORMALITY_END', 1, {
			target: pcid,
			id: shield[effect]
		})
		}
		}
	if (type == 'hand') {
		dispatch.toClient('S_ABNORMALITY_BEGIN', 2, {
	target: pcid,
	source: 69696969,
	id: hand[effect],
	duration: 0,
	unk: 0,
	stacks: 1,
	unk2: 0
		})
		if (arg3 == 'rm') {
			dispatch.toClient('S_ABNORMALITY_END', 1, {
			target: pcid,
			id: hand[effect]
		})
		}
		}
	if (type == 'ground') {
		dispatch.toClient('S_ABNORMALITY_BEGIN', 2, {
	target: pcid,
	source: 69696969,
	id: ground[effect],
	duration: 0,
	unk: 0,
	stacks: 1,
	unk2: 0
		})
		if (arg3 == 'rm') {
			dispatch.toClient('S_ABNORMALITY_END', 1, {
			target: pcid,
			id: ground[effect]
		})
		}
		}
	if (type == 'etc') {
		dispatch.toClient('S_ABNORMALITY_BEGIN', 2, {
	target: pcid,
	source: 69696969,
	id: etc[effect],
	duration: 0,
	unk: 0,
	stacks: 1,
	unk2: 0
		})
		if (arg3 == 'rm') {
			dispatch.toClient('S_ABNORMALITY_END', 1, {
			target: pcid,
			id: ground[effect]
		})
		}
		}
	}) // end of command
//FUNCTIONS
	function clearaura(){
		for (let abn of fab) {
	dispatch.toClient('S_ABNORMALITY_END', 1, {
	target: pcid,
	id: abn
	})
	}	
	}
	
}
